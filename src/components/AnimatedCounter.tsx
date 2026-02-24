import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  formatAsMillions?: boolean;
}

export function AnimatedCounter({ end, duration = 2200, suffix = "", prefix = "", label, formatAsMillions = false }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;
    setHasAnimated(true);
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, hasAnimated]);

  const displayValue = formatAsMillions
    ? `${prefix}${(count / 1_000_000).toFixed(count >= end ? 0 : 1)}M${suffix}`
    : `${prefix}${count.toLocaleString()}${suffix}`;

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight">
        {displayValue}
      </div>
      <div className="w-8 h-0.5 bg-gradient-brand mx-auto mt-4 mb-3 opacity-60 group-hover:w-12 transition-all duration-500" />
      <p className="text-xs font-body uppercase tracking-[0.15em] text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{label}</p>
    </div>
  );
}
