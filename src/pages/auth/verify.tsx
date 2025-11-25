import { Link } from "react-router-dom";
import { MailOpen, Zap } from "lucide-react";
import { Pattern } from "@/components/ui";

export default function Verify() {
  return (
    <Pattern>
      <div className="min-h-screen w-full flex flex-col relative z-10">
        <header className="w-full p-6 flex justify-center items-center layout">
          <Link to="/" className="flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-r from-violet-900 to-pink-400 rounded-lg flex items-center justify-center text-white">
               <Zap size={18} fill="currentColor" />
             </div>
             <span className="font-jaro text-xl tracking-wide text-main">SWIFT</span>
          </Link>
        </header>

        <main className="flex-1 center px-4">
          <div className="w-full max-w-md bg-secondary/50 border border-line p-8 rounded-[2rem] backdrop-blur-xl text-center space-y-6">
            <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm border border-line text-primary">
              <MailOpen size={32} />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-jaro text-main">Check your email</h1>
              <p className="text-muted text-sm leading-relaxed">
                We sent a verification link to your email address. Please click the link to activate your account.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/login" className="btn-primary px-6 py-3 rounded-xl text-sm w-full inline-block">
                Back to Login
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Pattern>
  );
}
