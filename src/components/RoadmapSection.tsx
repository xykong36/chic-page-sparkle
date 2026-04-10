import { motion } from "framer-motion";

const roadmap = [
  { id: "M1", icon: "💼", title: "英语面试", desc: "拿到Offer" },
  { id: "M2", icon: "☕", title: "职场社交", desc: "站稳脚跟" },
  { id: "M3", icon: "💬", title: "日常沟通", desc: "把事说清楚" },
  { id: "M4", icon: "🎯", title: "会议沟通", desc: "从参加到主导" },
  { id: "M5", icon: "📊", title: "演示汇报", desc: "讲得有逻辑有说服力" },
  { id: "M6", icon: "🔄", title: "影响与决策", desc: "推动事情发生" },
  { id: "M7", icon: "⬆️", title: "向上管理", desc: "掌握主动权" },
];

const RoadmapSection = () => (
  <section className="max-w-6xl mx-auto px-6 py-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        🗺️ <span>Learning Roadmap</span>
        <span className="text-sm font-normal text-muted-foreground">— 从入场到掌控的职场英语成长路径</span>
      </h2>
    </motion.div>

    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {roadmap.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="flex items-center gap-2 shrink-0"
        >
          <div className="rounded-2xl p-4 text-center hover-lift cursor-pointer min-w-[120px] group border border-border/30 bg-gradient-to-b from-accent/40 to-transparent">
            <div className="text-3xl mb-2 group-hover:animate-float">{item.icon}</div>
            <span className="text-[10px] font-bold text-primary">{item.id}</span>
            <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
            <p className="text-[10px] text-muted-foreground mt-1">{item.desc}</p>
          </div>
          {i < roadmap.length - 1 && (
            <span className="text-muted-foreground/40 text-lg shrink-0">›</span>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default RoadmapSection;
