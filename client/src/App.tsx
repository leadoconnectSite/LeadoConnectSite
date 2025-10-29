import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AppointmentSettings from "@/pages/AppointmentSettings";
import B2B from "@/pages/B2B";
import Price from "@/pages/about";
import FAQs from "@/components/FAQs";
import Contact from "@/pages/Contact";



function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/appointment-settings" component={AppointmentSettings} />
      <Route path="/b2b-lead-generation" component={B2B} />
      <Route path="/about" component={Price} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
