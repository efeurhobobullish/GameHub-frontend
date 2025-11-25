import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import { Home, NotFound } from "@/pages";
import { Signup, Login, Verify } from "@/pages/auth";

// Import all main app pages
import { 
  Dashboard, 
  History, 
  Services, 
  Wallet, 
  Profile, 
  Support,
  Order
} from "@/pages/main";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        {/* Landing & Auth */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />

        {/* Main App Routes (Matched to BottomNav) */}
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/order" element={<Order />} />
        <Route path="/transactions" element={<History />} />
        <Route path="/services" element={<Services />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
