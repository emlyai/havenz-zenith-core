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

export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", label, formatAsMillions = false }: AnimatedCounterProps) {
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, hasAnimated]);

  const displayValue = formatAsMillions
    ? `${prefix}${(count / 1_000_000).toFixed(count >= end ? 0 : 1)}M${suffix}`
    : `${prefix}${count.toLocaleString()}${suffix}`;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
        {displayValue}
      </div>
      <p className="mt-2 text-sm font-body uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}
