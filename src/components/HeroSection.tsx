import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const stats = [
  { value: "7", label: "核心模块" },
  { value: "30", label: "子话题" },
  { value: "97", label: "实战课时" },
];

const modules = [
  { id: "M1", title: "英语面试", icon: "💼", hours: 25 },
  { id: "M2", title: "职场社交", icon: "☕", hours: 12 },
  { id: "M3", title: "日常沟通", icon: "💬", hours: 13 },
  { id: "M4", title: "会议沟通", icon: "🎯", hours: 13 },
  { id: "M5", title: "演示汇报", icon: "📊", hours: 12 },
  { id: "M6", title: "影响与决策", icon: "🔄", hours: 10 },
  { id: "M7", title: "向上管理", icon: "⬆️", hours: 8 },
];

const HeroSection = () => (
  <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs tracking-[0.3em] text-muted-foreground font-medium mb-4 uppercase">
          Business English
        </p>
        <h1 className="text-5xl font-black leading-tight mb-2">商务英语</h1>
        <h2 className="text-5xl font-black gradient-text-coral leading-tight mb-6">
          职场通关 ✨
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
          以职业时间线为主轴，从面试拿 Offer 到向上管理，7 大模块覆盖真实职场全场景。每课聚焦一个具体能力，学完即用。
        </p>

      </motion.div>

      {/* Right - Clean 2x2 grid */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="grid grid-cols-2 gap-3 auto-rows-fr">
          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className={`glass-card rounded-2xl p-5 hover-lift cursor-pointer group ${modules.length % 2 !== 0 && i === modules.length - 1 ? 'col-span-2' : ''}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-coral flex items-center justify-center text-lg shadow-sm">
                  {m.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-wider">{m.id}</span>
                  <h3 className="text-sm font-bold text-foreground leading-tight">{m.title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                <span>{m.hours} 课时</span>
                <span>0%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-coral rounded-full w-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
