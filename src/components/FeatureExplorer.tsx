import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { featureCategories } from "@/data/plusDasFeatures";

const VISIBLE_FEATURE_COUNT = 5;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FeatureExplorer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying] = useState(() => !prefersReducedMotion());
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Only cycle while the section is on screen, so visitors start at the first tab
  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  const activeCategory = featureCategories[activeIndex];
  const isProgressRunning = isAutoPlaying && isInView && !isHovered && !isExpanded;
  const visibleFeatures = isExpanded
    ? activeCategory.features
    : activeCategory.features.slice(0, VISIBLE_FEATURE_COUNT);
  const hiddenFeatureCount = activeCategory.features.length - VISIBLE_FEATURE_COUNT;

  const goToNextCategory = () => {
    setIsExpanded(false);
    setActiveIndex((currentIndex) => (currentIndex + 1) % featureCategories.length);
  };

  // Hovering (or tapping, on touch screens) a tab jumps to it and restarts the 10-second timer
  const selectCategory = (categoryIndex: number) => {
    if (categoryIndex === activeIndex) return;
    setIsExpanded(false);
    setActiveIndex(categoryIndex);
  };

  return (
    <section ref={sectionRef} className="py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-600 mb-2">
            Explore
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Every feature in PlusDAS
          </h3>
        </div>

        {/* Rotation pauses while the pointer is over the tabs or the panel */}
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {/* Category tabs */}
          <div
            role="tablist"
            aria-label="PlusDAS feature categories"
            className="-mx-4 px-4 flex gap-2 overflow-x-auto pb-2 sm:mx-0 sm:px-0 sm:flex-wrap"
          >
            {featureCategories.map((category, categoryIndex) => {
              const isActive = categoryIndex === activeIndex;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`feature-panel-${category.id}`}
                  onMouseEnter={() => selectCategory(categoryIndex)}
                  onClick={() => selectCategory(categoryIndex)}
                  className={`relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-cyan-500 hover:text-gray-900"
                  }`}
                >
                  <category.icon className={`h-4 w-4 ${isActive ? "text-cyan-400" : ""}`} />
                  {category.tabLabel}
                  {isActive && isAutoPlaying && (
                    <span
                      key={activeIndex}
                      onAnimationEnd={goToNextCategory}
                      className="animate-feature-progress absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      style={{ animationPlayState: isProgressRunning ? "running" : "paused" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
  
          {/* Active category panel */}
          <div
            id={`feature-panel-${activeCategory.id}`}
            role="tabpanel"
            className="mt-8 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 items-start"
          >
            {/* Stat panel: dark card with the same gradient frame as the hook */}
            <div
              key={`stats-${activeCategory.id}`}
              className="animate-in fade-in zoom-in-95 duration-500 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[2px] shadow-2xl shadow-cyan-500/20"
            >
              <div className="rounded-[14px] bg-slate-900 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30">
                    <activeCategory.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{activeCategory.title}</h4>
                </div>
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-slate-800">
                  {activeCategory.stats.map((stat) => (
                    <div key={stat.label} className="bg-slate-900 p-5">
                      <p className="font-mono text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Feature list */}
            <div
              key={`features-${activeCategory.id}`}
              className="animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              <ul className="space-y-5">
                {visibleFeatures.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check className="h-3 w-3 text-emerald-600" />
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-900">{feature.title}.</span>{" "}
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
              {hiddenFeatureCount > 0 && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-6 inline-flex items-center gap-1 font-medium text-cyan-600 hover:text-cyan-700"
                >
                  {isExpanded ? "Show less" : `Show ${hiddenFeatureCount} more`}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureExplorer;
