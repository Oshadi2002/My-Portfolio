import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger, ViteDevServer } from "vite";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: express.Application, server: any) {
  const vite: ViteDevServer = await createViteServer({
    server: { middlewareMode: true, hmr: { server }, allowedHosts: true },
    appType: "custom",
    customLogger: {
      ...viteLogger,
      error: (msg: string, options?: any) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
  });

  app.use(vite.middlewares);

  app.use("*", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const templatePath = path.resolve("client", "index.html");
      let template = await fs.promises.readFile(templatePath, "utf-8");
      template = template.replace(
        'src="/src/main.tsx"',
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      if (e instanceof Error) vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

export function serveStatic(app: express.Application) {
  const distPath = path.resolve("dist/public");
  if (!fs.existsSync(distPath)) throw new Error(`Build directory not found: ${distPath}`);
  app.use(express.static(distPath));
  app.use("*", (_req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
