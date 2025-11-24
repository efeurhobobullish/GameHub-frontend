"use client";

import { useState, useEffect } from "react";
import ModeToggle from "@/components/ui/mode-toggle"; // Ensure this path is correct
import { 
  Heart, ArrowRight, Sparkles, ShieldCheck, 
  MessageCircle, Star, Menu, X, Check, Users
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-main font-sans selection:bg-primary/20 overflow-x-hidden">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-muted/5 rounded-full blur-[120px]" />
      </div>

      {/* --- Floating Navbar --- */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <nav className={`
            w-full max-w-[1200px] rounded-full transition-all duration-500 ease-out border
            flex items-center justify-between px-6 py-3
            ${scrolled 
              ? "bg-background/80 backdrop-blur-xl border-line/50 shadow-sm" 
              : "bg-transparent border-transparent"
            }
        `}>
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
              <Heart size={16} fill="currentColor" />
            </div>
            <span className="font-bold text-lg tracking-tight">SwiftMatch</span>
          </div>

          {/* Desktop Links (No Download) */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it Works</a>
            <a href="#stories" className="text-sm font-medium hover:text-primary transition-colors">Stories</a>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
             <ModeToggle />
             <div className="w-px h-6 bg-line/50 mx-1"></div>
             <a href="/login" className="px-5 py-2 text-sm font-medium hover:bg-secondary rounded-full transition-colors">
               Log in
             </a>
             <a href="/signup" className="px-5 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
               Join Now
             </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-main">
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10">
           <div className="flex flex-col gap-6 text-center">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Features</a>
              <a href="/login" className="btn border border-line h-12 rounded-xl">Log In</a>
              <a href="/signup" className="btn btn-primary h-12 rounded-xl text-white">Create Account</a>
           </div>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 text-center px-4 relative">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-line text-xs font-semibold tracking-wide text-muted mx-auto">
            <Sparkles size={12} />
            <span>REDEFINING CONNECTION</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-main">
            Dating, <br className="md:hidden" />
            <span className="text-muted italic font-serif pr-2">refined.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted/80 max-w-xl mx-auto leading-relaxed">
            Experience a dating platform designed for meaningful connections, not endless swiping. Curated matches for the modern era.
          </p>

          {/* Clean Buttons - Linking to Signup */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a href="/signup" className="h-14 px-8 rounded-full bg-main text-background font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-xl hover:translate-y-[-2px]">
              Start Matching <ArrowRight size={18} />
            </a>
            <a href="#features" className="h-14 px-8 rounded-full border border-line bg-background/50 hover:bg-secondary/50 font-medium transition-all flex items-center justify-center">
              See Features
            </a>
          </div>
        </div>

        {/* Abstract Hero Visual - Floating Cards */}
        <div className="mt-24 relative h-[400px] w-full max-w-[1000px] mx-auto hidden md:block">
            {/* Left Card */}
            <div className="absolute left-20 top-10 w-64 h-80 bg-background rounded-3xl shadow-2xl shadow-primary/10 border border-line/60 -rotate-6 transform hover:-rotate-3 transition-all duration-500 p-4 z-10">
                <div className="h-4/5 w-full bg-secondary/50 rounded-2xl mb-4 relative overflow-hidden center">
                    <Heart size={48} className="text-primary/20" fill="currentColor"/>
                </div>
                <div className="flex gap-2 items-center px-2">
                    <div className="w-8 h-8 rounded-full bg-secondary"></div>
                    <div className="h-2 w-24 bg-secondary rounded-full"></div>
                </div>
            </div>

            {/* Right Card */}
            <div className="absolute right-20 top-20 w-64 h-80 bg-background rounded-3xl shadow-2xl shadow-muted/10 border border-line/60 rotate-6 transform hover:rotate-3 transition-all duration-500 p-4 z-10">
                 <div className="h-4/5 w-full bg-secondary/50 rounded-2xl mb-4 relative overflow-hidden center">
                    <Star size={48} className="text-muted/20" fill="currentColor"/>
                </div>
                <div className="flex gap-2 items-center px-2">
                    <div className="w-8 h-8 rounded-full bg-secondary"></div>
                    <div className="h-2 w-24 bg-secondary rounded-full"></div>
                </div>
            </div>

            {/* Center Visual (Chat) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-[360px] bg-background/80 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-[2rem] shadow-2xl z-20 flex flex-col p-6">
                 <div className="flex-1 flex flex-col justify-end space-y-4">
                     <div className="self-start bg-secondary p-4 rounded-2xl rounded-tl-none text-sm animate-in slide-in-from-left-4 fade-in duration-700">
                        Hi! I noticed we both love hiking. 🏔️
                     </div>
                     <div className="self-end bg-primary text-white p-4 rounded-2xl rounded-tr-none text-sm shadow-lg shadow-primary/20 animate-in slide-in-from-right-4 fade-in duration-700 delay-300 fill-mode-forwards opacity-0" style={{animationDelay: '0.5s'}}>
                        Yes! I was just at Yosemite last week.
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* --- Neat Bento Grid Features --- */}
      <section id="features" className="py-24 main">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Big Feature Block */}
            <div className="md:col-span-2 bg-secondary/30 border border-line/20 rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-secondary/50 transition-colors group">
                <div className="max-w-md">
                    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm text-primary">
                        <ShieldCheck />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Safety First, Always.</h3>
                    <p className="text-muted">We use advanced AI to verify every single photo. If they don't look like their picture, they don't get on the platform.</p>
                </div>
                <div className="mt-8 flex gap-4">
                    <div className="px-4 py-2 bg-background rounded-full text-xs font-bold border border-line/50 flex items-center gap-2">
                        <Check size={12} className="text-green-500" /> Photo Verified
                    </div>
                    <div className="px-4 py-2 bg-background rounded-full text-xs font-bold border border-line/50 flex items-center gap-2">
                        <Check size={12} className="text-green-500" /> ID Check
                    </div>
                </div>
            </div>

            {/* Tall Feature Block */}
            <div className="md:row-span-2 bg-primary text-white rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                        <Sparkles className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Intelligent Matching</h3>
                    <p className="text-white/80 leading-relaxed">Our algorithm learns your "type" not just by what you say, but who you actually engage with.</p>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>

            {/* Small Feature Block */}
            <div className="bg-background border border-line rounded-[2.5rem] p-10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-main">
                    <MessageCircle />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Chat</h3>
                <p className="text-muted text-sm">No 24-hour countdowns. Match and talk immediately.</p>
            </div>

            {/* Small Feature Block */}
             <div className="bg-background border border-line rounded-[2.5rem] p-10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-main">
                    <Star />
                </div>
                <h3 className="text-xl font-bold mb-2">Top Picks</h3>
                <p className="text-muted text-sm">Daily curated list of people most compatible with you.</p>
            </div>
        </div>
      </section>

      {/* --- Minimalist Numbers --- */}
      <section className="py-20 border-y border-line/20 bg-secondary/10">
          <div className="main flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
              <h2 className="text-3xl font-bold max-w-xs">Trusted by the world's best daters.</h2>
              
              <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                  <div>
                      <div className="text-4xl font-bold text-primary mb-1">2M+</div>
                      <div className="text-sm font-medium text-muted uppercase tracking-wider">Matches</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-primary mb-1">150+</div>
                      <div className="text-sm font-medium text-muted uppercase tracking-wider">Countries</div>
                  </div>
                  <div>
                      <div className="text-4xl font-bold text-primary mb-1">4.9</div>
                      <div className="text-sm font-medium text-muted uppercase tracking-wider">Rating</div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- Final CTA (Web Focus) --- */}
      <section className="py-32 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to meet your person?</h2>
            <p className="text-lg text-muted">Join the community of millions who have found meaningful connections on SwiftMatch.</p>
            
            <div className="flex items-center justify-center gap-4">
                <a href="/signup" className="h-14 px-10 rounded-full bg-main text-background font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                    <Users size={20} />
                    Create Free Account
                </a>
            </div>
            
            <p className="text-xs text-muted/60 pt-8">
                © 2025 SwiftMatch. All rights reserved. <br />
                <a href="#" className="underline hover:text-primary">Privacy Policy</a> • <a href="#" className="underline hover:text-primary">Terms of Service</a>
            </p>
        </div>
      </section>

    </div>
  );
}
