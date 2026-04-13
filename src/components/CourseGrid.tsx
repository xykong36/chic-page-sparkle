import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutGrid, List } from "lucide-react";

const courses = [
  { id: "1.1", title: "自我介绍（30秒/1分钟/3分钟版本）", sub: "自我表达 · Tell Your Story", module: "M1" },
  { id: "1.1", title: "讲教育背景 / 实习经历", sub: "自我表达 · Tell Your Story", module: "M1" },
  { id: "1.1", title: "讲项目经验", sub: "自我表达 · Tell Your Story", module: "M1" },
  { id: "1.1", title: "解释gap year / 转专业 / 转行业", sub: "自我表达 · Tell Your Story", module: "M1" },
  { id: "1.2", title: "讲一个挑战", sub: "行为面试 · STAR Method", module: "M1" },
  { id: "1.2", title: "讲一个失败", sub: "行为面试 · STAR Method", module: "M1" },
  { id: "1.2", title: "讲团队合作", sub: "行为面试 · STAR Method", module: "M1" },
  { id: "1.3", title: "为什么选我们公司", sub: "动机匹配 · Why Us", module: "M1" },
];

const tabs = [
  { label: "全部", count: 97 },
  { label: "已学完", count: 0 },
  { label: "未学习", count: 97 },
];

const CourseGrid = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  const filtered = courses.filter(
    (c) => !search || c.title.includes(search) || c.sub.includes(search)
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索课程、话题、关键词..."
          className="w-full h-12 pl-11 pr-4 rounded-2xl bg-card border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">/</kbd>
      </div>

      {/* Tabs + View Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === i
                  ? "gradient-coral text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label} <span className="text-[10px] opacity-70">{tab.count}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
          <button
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-card shadow-sm" : ""}`}
          >
            <List className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-card shadow-sm" : ""}`}
          >
            <LayoutGrid className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Module Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full gradient-coral inline-block" />
          💼 M1 英语面试 — 拿到Offer
        </h3>
        <span className="text-sm text-muted-foreground">25 课时</span>
      </div>

      {/* Course Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={viewMode === "grid" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3" : "flex flex-col gap-2"}
        >
          {filtered.map((course, i) => (
            <motion.div
              key={`${course.title}-${i}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={
                viewMode === "grid"
                  ? "glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer group"
                  : "glass-card rounded-xl p-3 hover-lift cursor-pointer group flex items-center gap-3"
              }
            >
              {viewMode === "grid" && (
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center relative">
                  <span className="text-4xl group-hover:scale-110 transition-transform">💼</span>
                  <span className="absolute top-2 left-2 text-[10px] bg-card/90 backdrop-blur px-1.5 py-0.5 rounded font-mono text-muted-foreground">
                    {course.id}
                  </span>
                </div>
              )}
              {viewMode === "list" && (
                <span className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-muted-foreground shrink-0">
                  {course.id}
                </span>
              )}
              <div className={viewMode === "grid" ? "p-3" : ""}>
                <h4 className="text-xs font-semibold text-foreground leading-snug line-clamp-2">
                  <span className="text-muted-foreground font-mono mr-1">EP{String(i + 1).padStart(2, '0')}</span>
                  {course.title}
                </h4>
                <p className="text-[10px] text-muted-foreground mt-1">{course.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default CourseGrid;
