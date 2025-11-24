"use client";

import { useState, useEffect } from "react";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-main font-sans selection:bg-primary/20 overflow-x-hidden relative">

      {/* --- Ambient Background Blobs --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-primary/20 blur-[150px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-muted/20 blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* --- Navbar --- */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <nav className={`
          w-full max-w-[1200px] rounded-full transition-all duration-500 ease-out border
          flex items-center justify-between px-6 py-3
          ${scrolled 
            ? "bg-background/80 backdrop-blur-xl border-line/50 shadow-sm" 
            : "bg-transparent border-transparent"
          }
        `}>
          <div className="flex items-center gap-2 cursor-pointer font-bold text-lg">
            NovaAI
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it Works</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <a href="/login" className="px-5 py-2 text-sm font-medium hover:bg-secondary rounded-full transition-colors">
              Log in
            </a>
            <a href="/signup" className="px-5 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:shadow-lg transition-all active:scale-95">
              Sign Up
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-main">
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10">
          <div className="flex flex-col gap-6 text-center">
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium">Features</a>
            <a href="/login" className="btn border border-line h-12 rounded-xl">Log In</a>
            <a href="/signup" className="btn btn-primary h-12 rounded-xl text-white">Sign Up</a>
          </div>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section className="pt-32 md:pt-40 pb-20 text-center px-4 relative">
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Talk to your AI assistant
          </h1>
          <p className="text-lg md:text-xl text-muted/80 leading-relaxed">
            Ask questions, get answers, brainstorm ideas, or just have a conversation with your AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a href="/signup" className="h-14 px-8 rounded-full bg-primary text-white font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center">
              Get Started
            </a>
            <a href="#features" className="h-14 px-8 rounded-full border border-line bg-background/50 hover:bg-secondary/50 font-medium transition-all flex items-center justify-center">
              See Features
            </a>
          </div>
        </div>

        {/* Hero Chat Card */}
        <div className="relative mt-24 md:mt-32 w-full max-w-[380px] mx-auto md:absolute md:left-[50%] md:-translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="bg-foreground/80 dark:bg-[#343541]/80 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-3xl shadow-2xl flex flex-col p-6">
            <div className="flex-1 flex flex-col justify-end space-y-3">
              <div className="self-start bg-secondary p-3 rounded-2xl text-sm animate-in slide-in-from-left-4 fade-in duration-700">
                Hello! How can I help you today?
              </div>
              <div className="self-end bg-primary text-white p-3 rounded-2xl text-sm shadow-md animate-in slide-in-from-right-4 fade-in duration-700 delay-300 opacity-0" style={{ animationDelay: "0.5s" }}>
                Can you explain quantum computing in simple terms?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section id="features" className="py-24 px-4 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-foreground/50 rounded-2xl border border-line hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2">Instant Answers</h3>
          <p className="text-muted text-sm">Get accurate responses instantly on any topic.</p>
        </div>
        <div className="p-8 bg-foreground/50 rounded-2xl border border-line hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2">Creative Assistance</h3>
          <p className="text-muted text-sm">Generate text, ideas, or content with ease.</p>
        </div>
        <div className="p-8 bg-foreground/50 rounded-2xl border border-line hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2">Learning & Research</h3>
          <p className="text-muted text-sm">Use AI to explore and learn new concepts quickly.</p>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="py-32 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to try NovaAI?</h2>
          <p className="text-lg text-muted/80">Start chatting with your personal AI assistant today.</p>
          <a href="/signup" className="h-14 px-10 rounded-full bg-primary text-white font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
}