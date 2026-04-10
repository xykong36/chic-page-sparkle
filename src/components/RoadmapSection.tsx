import { motion } from "framer-motion";
import { Star } from "lucide-react";

const roadmap = [
  { id: "M1", icon: "💼", title: "英语面试", desc: "拿到Offer", tag: "求职必备", stars: 2 },
  { id: "M2", icon: "☕", title: "职场社交", desc: "站稳脚跟", tag: "融入团队", stars: 2 },
  { id: "M3", icon: "💬", title: "日常沟通", desc: "把事说清楚", tag: "基础能力", stars: 3 },
  { id: "M4", icon: "🎯", title: "会议沟通", desc: "从参加到主导", tag: "核心技能", stars: 3 },
  { id: "M5", icon: "📊", title: "演示汇报", desc: "讲得有逻辑有说服力", tag: "进阶表达", stars: 4 },
  { id: "M6", icon: "🔄", title: "影响与决策", desc: "推动事情发生", tag: "高阶能力", stars: 4 },
  { id: "M7", icon: "⬆️", title: "向上管理", desc: "掌握主动权", tag: "领导力", stars: 5 },
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

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
      {roadmap.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="rounded-2xl p-5 text-center hover-lift cursor-pointer group border border-border/40 bg-gradient-to-b from-primary/5 to-accent/10 hover:from-primary/10 hover:to-accent/20 transition-all"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
          <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
          <p className="text-[11px] text-muted-foreground mb-3">{item.desc}</p>
          <span className="inline-block text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-3">
            {item.tag}
          </span>
          <div className="flex items-center justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, si) => (
              <Star
                key={si}
                className={`w-3 h-3 ${si < item.stars ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default RoadmapSection;
