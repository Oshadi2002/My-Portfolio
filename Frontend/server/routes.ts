// server/routes.ts
import { createServer } from "http";
import path from "path";
import express from "express";

export async function registerRoutes(app: express.Express) {
  app.use("/attached_assets", (req, res, next) => {
    const filePath = path.join(process.cwd(), req.path);
    res.sendFile(filePath, (err) => {
      if (err) next();
    });
  });

  return createServer(app);
}
