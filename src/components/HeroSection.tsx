import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "核心模块" },
  { value: "30", label: "子话题" },
  { value: "97", label: "实战课时" },
];

const modules = [
  { id: "M1", title: "英语面试", subtitle: "Job Interview · 拿到Offer", icon: "💼", hours: 25, tags: ["自我表达", "行为面试", "动机匹配"], accent: "coral" },
  { id: "M2", title: "职场社交", subtitle: "Small Talk · 站稳脚跟", icon: "☕", hours: 12, tags: ["第一印象", "闲聊"], accent: "gold" },
  { id: "M3", title: "日常沟通", subtitle: "Daily Comms · 把事说清楚", icon: "💬", hours: 13, tags: ["状态更新", "数据表达"], accent: "blue" },
  { id: "M4", title: "会议沟通", subtitle: "Meetings · 从参加到主导", icon: "🎯", hours: 13, tags: ["参与会议", "处理分歧"], accent: "green" },
];

const HeroSection = () => (
  <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
    {/* Centered Header */}
    <motion.div
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xs tracking-[0.3em] text-muted-foreground font-medium mb-3 uppercase">
        Business English
      </p>
      <h1 className="text-5xl font-black leading-tight mb-1">商务英语</h1>
      <h2 className="text-5xl font-black gradient-text-coral leading-tight mb-5">
        职场通关 ✨
      </h2>
      <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
        以职业时间线为主轴，从面试拿 Offer 到向上管理，7 大模块覆盖真实职场全场景。
      </p>

      <div className="flex items-center justify-center gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-black text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Horizontal scrolling card feed */}
    <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
      <div className="flex gap-4 w-max">
        {modules.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.08 }}
            className="glass-card rounded-2xl p-5 hover-lift cursor-pointer group w-[260px] flex-shrink-0 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl gradient-coral flex items-center justify-center text-xl shadow-sm">
                  {m.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary tracking-wider">{m.id}</span>
                  <h3 className="text-base font-bold text-foreground leading-tight">{m.title}</h3>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground mb-3">{m.subtitle}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {m.tags.map((tag) => (
                  <span key={tag} className="tag-pill bg-accent text-accent-foreground text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1">
                <span>{m.hours} 课时</span>
                <span>0%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-coral rounded-full w-0" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
