import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "", label }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="mt-2 text-sm font-body uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}
