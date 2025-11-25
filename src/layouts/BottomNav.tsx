import {
  CreditCard,
  Headset,
  Home,
  LayoutGrid,
  Package,
  UserRound,
  Wallet,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const menuItems = [
  { name: "Home", icon: Home, link: "/dashboard" },
  { name: "Profile", icon: UserRound, link: "/profile" },
  { name: "Services", icon: Package, link: "/services" },
  { name: "Transactions", icon: CreditCard, link: "/transactions" },
  { name: "Wallet", icon: Wallet, link: "/wallet" },
  { name: "Support", icon: Headset, link: "/support" },
];

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const firstTwo = menuItems.slice(0, 2);
  const remainingItems = menuItems.slice(2);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Main floating bar */}
      <div className="bg-main p-4 rounded-full fixed bottom-8 left-1/2 -translate-x-1/2 z-50 shadow-2xl flex items-center justify-between min-w-[320px] md:min-w-[350px]">
        {/* Left items */}
        <ul className="flex items-center gap-2">
          {firstTwo.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-background flex items-center gap-2 text-xs font-medium bg-white/20 rounded-full py-2 px-3 border border-white/10 transition-all"
                    : "text-background/70 flex items-center gap-2 text-xs font-medium rounded-full py-2 px-3 hover:bg-white/10 transition-all"
                }
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Center Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background border-[6px] border-background text-main h-16 w-16 flex items-center justify-center rounded-full shadow-lg z-50 hover:scale-105 transition-transform"
        >
          {isOpen ? <X size={24} /> : <LayoutGrid size={24} />}
        </button>

        {/* This spacer pushes the items to the sides if needed, but for now we just render the button absolute */}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Bottom sheet */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              className="fixed bottom-32 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-background border border-line p-4 rounded-3xl z-50 shadow-2xl"
            >
              <ul className="grid grid-cols-2 gap-2">
                {remainingItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "flex flex-col items-center justify-center gap-2 text-sm font-bold bg-main text-background rounded-2xl p-4 transition-all"
                          : "flex flex-col items-center justify-center gap-2 text-sm font-medium text-muted rounded-2xl bg-secondary/50 hover:bg-secondary hover:text-main p-4 transition-all"
                      }
                    >
                      <item.icon size={24} />
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNav;
