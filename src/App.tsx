import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import AdminLayout from "@/components/admin/AdminLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Adoption from "@/pages/Adoption";
import PetProfile from "@/pages/PetProfile";
import RequestToAdopt from "@/pages/RequestToAdopt";
import ContactCaregiver from "@/pages/ContactCaregiver";
import SubmissionSuccess from "@/pages/SubmissionSuccess";
import Dashboard from "@/pages/admin/Dashboard";
import PetsList from "@/pages/admin/PetsList";
import UsersList from "@/pages/admin/UsersList";
import ContactMessages from "@/pages/admin/ContactMessages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="adoption" element={<Adoption />} />
            <Route path="pet/:id" element={<PetProfile />} />
            <Route path="pet/:id/request-adopt" element={<RequestToAdopt />} />
            <Route path="pet/:id/contact" element={<ContactCaregiver />} />
            <Route path="success" element={<SubmissionSuccess />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="pets" element={<PetsList />} />
            <Route path="users" element={<UsersList />} />
            <Route path="contact-messages" element={<ContactMessages />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);

export default App;
