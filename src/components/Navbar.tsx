import { motion } from "framer-motion";

const navItems = [
  { label: "300期油管地道口语", active: false },
  { label: "商务英语", active: true, isNew: true },
  { label: "雅思口语题库", active: false },
  { label: "表达素材库", active: false },
  { label: "全文搜索", active: false },
  { label: "学习中心", active: false },
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/40"
  >
    <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center gap-8">
      {navItems.map((item) => (
        <button
          key={item.label}
          className={`relative text-sm font-medium transition-colors ${
            item.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
          {item.isNew && (
            <span className="absolute -top-1 -right-8 gradient-coral text-primary-foreground text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              NEW
            </span>
          )}
          {item.active && (
            <motion.div
              layoutId="nav-indicator"
              className="absolute -bottom-[17px] left-0 right-0 h-0.5 gradient-coral rounded-full"
            />
          )}
        </button>
      ))}
    </div>
  </motion.nav>
);

export default Navbar;
