import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, Github, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { Pattern, ButtonWithLoader, ModeToggle } from "@/components/ui";
import { useThemeStore } from "@/store";
import { toast } from "sonner";

export default function Login() {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const logoPath = theme === "dark" ? "/logo-white.svg" : "/logo-colour.svg";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Welcome back!");
      navigate("/chat");
    } catch (error) {
      toast.error("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.info("Google login coming soon");
  };

  const handleGitHubLogin = () => {
    toast.info("GitHub login coming soon");
  };

  const handleForgotPassword = () => {
    toast.info("Password reset coming soon");
  };

  return (
    <Pattern>
      <div className="relative z-10 min-h-[100dvh] flex flex-col overflow-x-hidden">
        {/* Header */}
        <header className="w-full p-6 md:p-8 flex justify-between items-center max-w-7xl mx-auto z-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <img src={logoPath} alt="NeuralCore" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-main to-main/70 bg-clip-text text-transparent">
              NeuralCore
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm text-muted hover:text-main transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
            <ModeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 pb-12 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            {/* Card */}
            <div className="bg-background border border-line rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-main/10 to-main/5 flex items-center justify-center"
                  >
                    <Sparkles className="w-8 h-8 text-main" />
                  </motion.div>
                  <h1 className="text-2xl font-bold text-main mb-2">
                    Welcome back
                  </h1>
                  <p className="text-muted text-sm">
                    Sign in to continue your AI journey
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-main">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-secondary border border-line rounded-xl text-main placeholder-muted focus:border-main transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium text-main">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-xs text-main hover:underline transition-colors"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-12 py-3 bg-secondary border border-line rounded-xl text-main placeholder-muted focus:border-main transition-colors"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-main transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <ButtonWithLoader
                    loading={isLoading}
                    initialText="Sign In"
                    loadingText="Signing in..."
                    onClick={() => {}}
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-base font-medium mt-6 bg-main text-background hover:bg-main/90 transition-all flex items-center justify-center gap-2"
                  >
                    {!isLoading && <ArrowRight size={16} />}
                  </ButtonWithLoader>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-line" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-muted">Or continue with</span>
                  </div>
                </div>

                {/* OAuth Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-line rounded-xl text-main hover:bg-secondary transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>

                  <button
                    onClick={handleGitHubLogin}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-line rounded-xl text-main hover:bg-secondary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Continue with GitHub
                  </button>
                </div>

                {/* Signup Link */}
                <div className="text-center mt-6">
                  <p className="text-muted text-sm">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-main font-medium hover:underline transition-colors"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-4 bg-secondary border-t border-line">
                <p className="text-xs text-muted text-center">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-main hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-main hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </Pattern>
  );
}