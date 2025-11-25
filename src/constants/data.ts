import { 
  MessageCircle, Send, Instagram, Facebook, Wallet, Car, 
  Twitter, Youtube, Twitch, Linkedin, Github, Mail, 
  ShoppingCart, Music, Play, Video, MapPin, Search, 
  Globe, Smartphone, Coffee, Gamepad2, Ghost, Lock
} from "lucide-react";

// Define Types
export interface Country {
  id: string;
  name: string;
  code: string;
  flag: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  icon: any;
  color: string;
}

export const ALL_COUNTRIES: Country[] = [
  { id: "us", name: "United States", code: "+1", flag: "🇺🇸" },
  { id: "gb", name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { id: "ca", name: "Canada", code: "+1", flag: "🇨🇦" },
  { id: "ng", name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { id: "br", name: "Brazil", code: "+55", flag: "🇧🇷" },
  { id: "in", name: "India", code: "+91", flag: "🇮🇳" },
  { id: "de", name: "Germany", code: "+49", flag: "🇩🇪" },
  { id: "fr", name: "France", code: "+33", flag: "🇫🇷" },
  { id: "za", name: "South Africa", code: "+27", flag: "🇿🇦" },
  { id: "cn", name: "China", code: "+86", flag: "🇨🇳" },
  { id: "au", name: "Australia", code: "+61", flag: "🇦🇺" },
  { id: "jp", name: "Japan", code: "+81", flag: "🇯🇵" },
  { id: "ru", name: "Russia", code: "+7", flag: "🇷🇺" },
  { id: "mx", name: "Mexico", code: "+52", flag: "🇲🇽" },
  { id: "es", name: "Spain", code: "+34", flag: "🇪🇸" }
];

export const ALL_SERVICES: Service[] = [
  { id: "wa", name: "WhatsApp", price: 450, icon: MessageCircle, color: "text-green-500" },
  { id: "tg", name: "Telegram", price: 350, icon: Send, color: "text-blue-500" },
  { id: "ig", name: "Instagram", price: 150, icon: Instagram, color: "text-pink-500" },
  { id: "fb", name: "Facebook", price: 200, icon: Facebook, color: "text-blue-600" },
  { id: "tw", name: "Twitter / X", price: 250, icon: Twitter, color: "text-black dark:text-white" },
  { id: "tt", name: "TikTok", price: 180, icon: Video, color: "text-pink-600" },
  { id: "go", name: "Google / Gmail", price: 300, icon: Mail, color: "text-red-500" },
  { id: "nf", name: "Netflix", price: 120, icon: Play, color: "text-red-700" },
  { id: "am", name: "Amazon", price: 200, icon: ShoppingCart, color: "text-orange-500" },
  { id: "pp", name: "PayPal", price: 600, icon: Wallet, color: "text-blue-800" },
  { id: "ub", name: "Uber", price: 250, icon: Car, color: "text-main" },
  { id: "sc", name: "Snapchat", price: 180, icon: Ghost, color: "text-yellow-400" },
  { id: "ai", name: "OpenAI", price: 550, icon: Lock, color: "text-teal-600" }
];
