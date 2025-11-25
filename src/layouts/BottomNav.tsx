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
  const lastThree = menuItems.slice(2);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Main floating bar */}
      <div className="bg-primary text-primary-foreground p-4 rounded-full fixed bottom-6 left-1/2 -translate-x-1/2 z-50 shadow-xl min-w-[320px]">
        
        {/* The List with a gap in the middle for the button */}
        <ul className="flex items-center justify-between gap-16 px-2">
          {firstTwo.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-sm font-bold bg-primary-foreground/20 text-primary-foreground rounded-full px-4 py-2 border border-primary-foreground/10 transition-all"
                    : "flex items-center gap-2 text-sm font-medium text-primary-foreground/70 rounded-full px-4 py-2 hover:bg-primary-foreground/10 transition-all"
                }
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* The Floating Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="absolute border-[6px] border-background -top-6 left-1/2 -translate-x-1/2 bg-background text-primary h-16 w-16 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          {isOpen ? <X size={24} /> : <LayoutGrid size={24} />}
        </button>
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
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Bottom sheet */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              className="fixed bottom-32 left-1/2 -translate-x-1/2 w-[90%] md:w-[480px] bg-card text-card-foreground border border-border p-4 rounded-3xl z-50 shadow-2xl"
            >
              <ul className="grid grid-cols-1 gap-2">
                {lastThree.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-3 text-sm font-bold bg-primary text-primary-foreground rounded-xl p-4 transition-all"
                          : "flex items-center gap-3 text-sm font-medium text-muted-foreground rounded-xl hover:text-foreground hover:bg-secondary border border-transparent p-4 transition-all"
                      }
                    >
                      <item.icon size={22} />
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
