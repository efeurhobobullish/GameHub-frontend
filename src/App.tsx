import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import { Home, NotFound } from "@/pages";
import { Signup, Login } from "@/pages/auth";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      
       
        {/* 404 fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
