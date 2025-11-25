import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Menu, 
  X, 
  ArrowRight,
  Check,
  MessageSquare
} from 'lucide-react';

/* --- UI Components --- */

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "inline-flex items-center justify-center h-12 px-6 rounded-lg font-bold transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-main text-background hover:opacity-90",
    outline: "border border-line text-main hover:bg-secondary",
    ghost: "text-muted hover:text-main"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl border border-line bg-background hover:border-main/50 transition-colors">
    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 text-main">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold mb-2 text-main">{title}</h3>
    <p className="text-muted text-sm leading-relaxed">{desc}</p>
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-secondary/50 text-xs font-medium text-main mb-6">
    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
    {children}
  </span>
);

/* --- Sections --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-main">
          <div className="w-8 h-8 bg-main text-background rounded-lg flex items-center justify-center">
            <Zap size={18} fill="currentColor" />
          </div>
          SwiftPlug
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#features" className="hover:text-main transition-colors">Features</a>
          <a href="#pricing" className="hover:text-main transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-main transition-colors">Support</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="h-10 px-4">Log in</Button>
          <Button className="h-10 px-4">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-main" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-line bg-background p-6 space-y-4">
          <a href="#features" className="block text-lg font-medium text-main">Features</a>
          <a href="#pricing" className="block text-lg font-medium text-main">Pricing</a>
          <Button className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <Badge>v2.0 Now Live</Badge>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-main mb-6">
        Virtual numbers for <br/>
        <span className="text-muted">secure verification.</span>
      </h1>
      <p className="text-lg text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
        Receive SMS codes instantly from WhatsApp, Telegram, Google, and 50+ other services. No SIM card required.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button className="w-full sm:w-auto h-14 px-8 text-lg">
          Start Verifying <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg">
          View Pricing
        </Button>
      </div>

      {/* Simple Visual */}
      <div className="mt-20 p-2 rounded-2xl bg-line/20 border border-line max-w-3xl mx-auto">
        <div className="bg-background rounded-xl border border-line overflow-hidden shadow-sm">
           <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="text-xs text-muted font-mono ml-4">swiftplug-dashboard.exe</div>
           </div>
           <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                <MessageSquare size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-main">Verification Code Received</h3>
                <p className="text-muted mt-1">Your WhatsApp code is <span className="text-main font-mono font-bold tracking-widest bg-secondary px-2 py-0.5 rounded">829-102</span></p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 px-6 border-t border-line bg-secondary/20">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <Card 
          icon={Zap}
          title="Instant Delivery"
          desc="Our automated system delivers SMS codes to your dashboard in under 10 seconds."
        />
        <Card 
          icon={Globe}
          title="Global Coverage"
          desc="Access real non-VoIP numbers from the US, UK, Netherlands, and 40+ other countries."
        />
        <Card 
          icon={ShieldCheck}
          title="Private & Secure"
          desc="We never ask for your ID. Create an account anonymously and pay with Crypto."
        />
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 px-6 border-y border-line">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { label: 'Active Users', val: '50k+' },
        { label: 'Countries', val: '45+' },
        { label: 'SMS Received', val: '2M+' },
        { label: 'Uptime', val: '99.9%' },
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-3xl md:text-4xl font-bold text-main mb-1">{stat.val}</div>
          <div className="text-sm text-muted font-medium uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-background text-center">
    <div className="flex items-center justify-center gap-2 font-bold text-xl text-main mb-6">
      <Zap size={20} fill="currentColor" />
      SwiftPlug
    </div>
    <div className="flex justify-center gap-6 text-sm text-muted mb-8">
      <a href="#" className="hover:text-main">Terms</a>
      <a href="#" className="hover:text-main">Privacy</a>
      <a href="#" className="hover:text-main">Contact</a>
    </div>
    <p className="text-muted/60 text-sm">© 2026 SwiftPlug. All rights reserved.</p>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-main font-sans antialiased selection:bg-main selection:text-background">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

