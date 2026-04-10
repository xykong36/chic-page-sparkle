import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "核心模块" },
  { value: "30", label: "子话题" },
  { value: "97", label: "实战课时" },
];

const HeroSection = () => (
  <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs tracking-[0.3em] text-muted-foreground font-medium mb-4 uppercase">
          Business English
        </p>
        <h1 className="text-5xl font-black leading-tight mb-2">
          商务英语
        </h1>
        <h2 className="text-5xl font-black gradient-text-coral leading-tight mb-6">
          职场通关 ✨
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
          以职业时间线为主轴，从面试拿 Offer 到向上管理，7 大模块覆盖真实职场全场景。每课聚焦一个具体能力，学完即用。
        </p>

        <div className="flex items-end gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right - Module Cards */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-3"
      >
        {modules.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="glass-card rounded-2xl p-4 hover-lift cursor-pointer group"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{m.icon}</span>
              <div>
                <span className="text-[10px] font-bold text-primary">{m.id}</span>
                <h3 className="text-sm font-bold text-foreground">{m.title}</h3>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mb-3">{m.subtitle}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {m.tags.map((tag) => (
                <span key={tag} className="tag-pill bg-accent text-accent-foreground text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground">{m.hours} 课时</span>
              <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full gradient-coral rounded-full" style={{ width: `${m.progress}%` }} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const modules = [
  { id: "M1", title: "英语面试", subtitle: "Job Interview · 拿到Offer", icon: "💼", tags: ["自我表达", "行为面试", "动机匹配"], hours: 25, progress: 0 },
  { id: "M2", title: "职场社交", subtitle: "Small Talk · 站稳脚跟", icon: "☕", tags: ["第一印象", "日常闲聊", "职场社交场景"], hours: 12, progress: 0 },
  { id: "M3", title: "日常沟通", subtitle: "Daily Communication · 把事说清楚", icon: "💬", tags: ["状态更新", "问题汇报", "数据表达"], hours: 13, progress: 0 },
  { id: "M4", title: "会议沟通", subtitle: "Meetings · 从参加到主导", icon: "🎯", tags: ["参与会议", "信息对齐", "处理分歧"], hours: 13, progress: 0 },
];

export default HeroSection;
