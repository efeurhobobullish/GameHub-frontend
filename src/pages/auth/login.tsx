import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Eye, EyeOff, Mail, Lock, Zap } from "lucide-react";
import { ButtonWithLoader, ModeToggle, Pattern } from "@/components/ui";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error("Please enter your credentials");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  return (
    <Pattern>
      <div className="min-h-screen w-full flex flex-col relative z-10">
        {/* Minimal Header */}
        <header className="w-full p-6 flex justify-between items-center layout">
          <Link to="/" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-r from-violet-900 to-pink-400 rounded-lg flex items-center justify-center text-white">
               <Zap size={18} fill="currentColor" />
             </div>
             <span className="font-jaro text-xl tracking-wide text-main">SWIFT</span>
          </Link>
          <ModeToggle />
        </header>

        <main className="flex-1 center px-4 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-secondary/50 border border-line p-8 rounded-[2rem] backdrop-blur-xl shadow-xl"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold font-jaro mb-2 text-main">Welcome Back</h1>
              <p className="text-sm text-muted">Continue to your dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="input w-full pl-11 bg-background"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="input w-full pl-11 pr-11 bg-background"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-main transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-xs text-muted hover:text-primary transition-colors">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div className="pt-2">
                <ButtonWithLoader 
                  loading={isLoading}
                  initialText="Log In"
                  loadingText="Signing In..."
                  className="btn-primary w-full h-12 rounded-xl text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-violet-500/20 transition-all"
                />
              </div>
            </form>

            <div className="mt-8 text-center space-y-4">
              <div className="h-[1px] bg-line w-full" />
              
              <div className="text-sm text-muted">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary font-bold hover:underline ml-1">
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </Pattern>
  );
}
