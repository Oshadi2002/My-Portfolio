import { Router, Route } from "wouter";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import LoadingPage from "./components/LoadingPage";

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:rest*" component={NotFound} />
    </Router>
  );
}

function AppContent() {
  // Example: pretend we are fetching user settings
  const { isLoading } = useQuery({
    queryKey: ["appSettings"],
    queryFn: async () => {
      return new Promise((res) => setTimeout(() => res("ok"), 2000));
    },
  });

  if (isLoading) return <LoadingPage />; // show loader while loading

  return <AppRouter />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
