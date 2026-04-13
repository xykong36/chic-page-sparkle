import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const moduleColors = [
  { bg: "from-[hsl(12,80%,55%)]/10 to-[hsl(25,90%,55%)]/15", border: "hover:border-[hsl(12,80%,55%)]/40", text: "text-[hsl(12,80%,55%)]", tagBg: "bg-[hsl(12,80%,55%)]/10" },
  { bg: "from-[hsl(38,90%,55%)]/10 to-[hsl(45,95%,60%)]/15", border: "hover:border-[hsl(38,90%,55%)]/40", text: "text-[hsl(38,90%,55%)]", tagBg: "bg-[hsl(38,90%,55%)]/10" },
  { bg: "from-[hsl(175,60%,45%)]/10 to-[hsl(150,50%,45%)]/15", border: "hover:border-[hsl(175,60%,45%)]/40", text: "text-[hsl(175,60%,45%)]", tagBg: "bg-[hsl(175,60%,45%)]/10" },
  { bg: "from-[hsl(210,70%,55%)]/10 to-[hsl(220,80%,60%)]/15", border: "hover:border-[hsl(210,70%,55%)]/40", text: "text-[hsl(210,70%,55%)]", tagBg: "bg-[hsl(210,70%,55%)]/10" },
  { bg: "from-[hsl(270,50%,55%)]/10 to-[hsl(280,60%,60%)]/15", border: "hover:border-[hsl(270,50%,55%)]/40", text: "text-[hsl(270,50%,55%)]", tagBg: "bg-[hsl(270,50%,55%)]/10" },
  { bg: "from-[hsl(340,75%,55%)]/10 to-[hsl(350,80%,60%)]/15", border: "hover:border-[hsl(340,75%,55%)]/40", text: "text-[hsl(340,75%,55%)]", tagBg: "bg-[hsl(340,75%,55%)]/10" },
  { bg: "from-[hsl(28,90%,55%)]/10 to-[hsl(38,90%,55%)]/15", border: "hover:border-[hsl(28,90%,55%)]/40", text: "text-[hsl(28,90%,55%)]", tagBg: "bg-[hsl(28,90%,55%)]/10" },
];

const roadmap = [
  {
    id: "M1", icon: "💼", title: "英语面试", desc: "拿到Offer", tag: "求职必备",
    lessons: 12, duration: "6小时",
    details: "系统掌握英语面试全流程：自我介绍、行为面试(STAR法则)、技术讨论、薪资谈判、感谢信撰写。",
    topics: ["自我介绍模板", "STAR法则实战", "常见问题应答", "薪资谈判话术", "面试后跟进"],
  },
  {
    id: "M2", icon: "☕", title: "职场社交", desc: "站稳脚跟", tag: "融入团队",
    lessons: 10, duration: "5小时",
    details: "从第一天入职到融入团队，学会Small Talk、午餐社交、团队活动中的自然英语表达。",
    topics: ["破冰对话", "Small Talk技巧", "午餐社交", "团队活动表达", "跨文化礼仪"],
  },
  {
    id: "M3", icon: "💬", title: "日常沟通", desc: "把事说清楚", tag: "基础能力",
    lessons: 15, duration: "8小时",
    details: "职场日常高频场景：邮件写作、Slack沟通、请求协助、反馈意见、状态更新。",
    topics: ["专业邮件写作", "即时通讯礼仪", "请求与委托", "给予反馈", "状态汇报"],
  },
  {
    id: "M4", icon: "🎯", title: "会议沟通", desc: "从参加到主导", tag: "核心技能",
    lessons: 14, duration: "7小时",
    details: "从被动参会到主动发言再到主持会议，掌握会议中的关键表达和引导技巧。",
    topics: ["会议发言技巧", "观点表达框架", "讨论引导", "会议纪要", "远程会议技巧"],
  },
  {
    id: "M5", icon: "📊", title: "演示汇报", desc: "讲得有逻辑有说服力", tag: "进阶表达",
    lessons: 12, duration: "6.5小时",
    details: "结构化表达 + 数据驱动叙事，让你的Presentation既有深度又有说服力。",
    topics: ["演示结构设计", "数据可视化表达", "故事化叙事", "Q&A应对", "高管汇报"],
  },
  {
    id: "M6", icon: "🔄", title: "影响与决策", desc: "推动事情发生", tag: "高阶能力",
    lessons: 10, duration: "5.5小时",
    details: "跨部门协作、说服利益相关者、推动决策落地的高阶沟通能力。",
    topics: ["跨部门协作", "利益相关者管理", "说服力技巧", "冲突化解", "决策推动"],
  },
  {
    id: "M7", icon: "⬆️", title: "向上管理", desc: "掌握主动权", tag: "领导力",
    lessons: 8, duration: "4.5小时",
    details: "与上级高效沟通：1-on-1、绩效评估、争取资源、汇报坏消息、建立信任。",
    topics: ["1-on-1沟通", "绩效评估对话", "争取资源", "坏消息汇报", "建立信任关系"],
  },
];

const RoadmapSection = () => {
  const [selected, setSelected] = useState<typeof roadmap[0] | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          🗺️ <span>学习路线图</span>
          <span className="text-sm font-normal text-muted-foreground">— 从入场到掌控的职场英语成长路径</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
        {roadmap.map((item, i) => {
          const color = moduleColors[i];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(item)}
              className={`rounded-2xl p-5 text-center hover-lift cursor-pointer group border border-border/40 bg-gradient-to-b ${color.bg} ${color.border} transition-all`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground mb-3">{item.desc}</p>
              <span className={`inline-block text-[10px] font-medium ${color.text} ${color.tagBg} px-2 py-0.5 rounded-full mb-3`}>
                {item.tag}
              </span>
            </motion.div>
          );
        })}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="sm:max-w-md">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-4xl">{selected.icon}</span>
                  <div className="text-left">
                    <DialogTitle className="text-lg">{selected.title}</DialogTitle>
                    <DialogDescription>{selected.desc}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> {selected.lessons} 节课
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {selected.duration}
                </span>
                <span className="inline-block text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {selected.tag}
                </span>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">{selected.details}</p>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">课程内容</h4>
                <ul className="space-y-1.5">
                  {selected.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RoadmapSection;
