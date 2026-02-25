import { motion } from "framer-motion";

interface HavenzLogoProps {
  className?: string;
  iconOnly?: boolean;
  animated?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { height: 28, iconSize: 28, textSize: "text-[13px]", gap: "gap-2" },
  md: { height: 36, iconSize: 36, textSize: "text-[16px]", gap: "gap-2.5" },
  lg: { height: 48, iconSize: 48, textSize: "text-[20px]", gap: "gap-3" },
};

export function HavenzLogo({ className = "", iconOnly = false, animated = true, size = "md" }: HavenzLogoProps) {
  const s = sizes[size];
  const Wrapper = animated ? motion.div : "div";
  const wrapperProps = animated
    ? { whileHover: { scale: 1.02 }, transition: { type: "spring", stiffness: 400, damping: 25 } }
    : {};

  return (
    <Wrapper {...(wrapperProps as any)} className={`flex items-center ${s.gap} ${className}`}>
      {/* Icon Mark — Abstract neural/circuit hexagon */}
      <svg
        width={s.iconSize}
        height={s.iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="havenz-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(173, 58%, 39%)" />
            <stop offset="100%" stopColor="hsl(190, 70%, 50%)" />
          </linearGradient>
          <linearGradient id="havenz-grad-inner" x1="12" y1="12" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(190, 70%, 50%)" />
            <stop offset="100%" stopColor="hsl(173, 58%, 39%)" />
          </linearGradient>
        </defs>

        {/* Outer hexagon — thin stroke */}
        <path
          d="M24 3L43.053 14V36L24 47L4.947 36V14L24 3Z"
          stroke="url(#havenz-grad)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />

        {/* Inner hexagon — filled subtle */}
        <path
          d="M24 10L37.32 17.5V32.5L24 40L10.68 32.5V17.5L24 10Z"
          stroke="url(#havenz-grad)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Neural network nodes and connections */}
        {/* Center node */}
        <circle cx="24" cy="24" r="3" fill="url(#havenz-grad)" />

        {/* Top node */}
        <circle cx="24" cy="13" r="1.8" fill="url(#havenz-grad)" opacity="0.8" />
        <line x1="24" y1="15" x2="24" y2="21" stroke="url(#havenz-grad)" strokeWidth="0.8" opacity="0.5" />

        {/* Bottom node */}
        <circle cx="24" cy="35" r="1.8" fill="url(#havenz-grad)" opacity="0.8" />
        <line x1="24" y1="33" x2="24" y2="27" stroke="url(#havenz-grad)" strokeWidth="0.8" opacity="0.5" />

        {/* Top-left node */}
        <circle cx="14" cy="18" r="1.5" fill="url(#havenz-grad)" opacity="0.6" />
        <line x1="15.5" y1="19" x2="21.5" y2="22.5" stroke="url(#havenz-grad)" strokeWidth="0.8" opacity="0.4" />

        {/* Top-right node */}
        <circle cx="34" cy="18" r="1.5" fill="url(#havenz-grad)" opacity="0.6" />
        <line x1="32.5" y1="19" x2="26.5" y2="22.5" stroke="url(#havenz-grad)" strokeWidth="0.8" opacity="0.4" />

        {/* Bottom-left node */}
        <circle cx="14" cy="30" r="1.5" fill="url(#havenz-grad)" opacity="0.6" />
        <line x1="15.5" y1="29" x2="21.5" y2="25.5" stroke="url(#havenz-grad)" strokeWidth="0.8" opacity="0.4" />

        {/* Bottom-right node */}
        <circle cx="34" cy="30" r="1.5" fill="url(#havenz-grad)" opacity="0.6" />
        <line x1="32.5" y1="29" x2="26.5" y2="25.5" stroke="url(#havenz-grad)" strokeWidth="0.8" opacity="0.4" />

        {/* Subtle pulse ring */}
        <circle cx="24" cy="24" r="8" stroke="url(#havenz-grad)" strokeWidth="0.5" fill="none" opacity="0.15" />
      </svg>

      {/* Wordmark */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-heading font-semibold tracking-[0.25em] text-primary-foreground ${s.textSize}`}
          >
            HAVENZ
          </span>
          <span className="font-body text-[8px] tracking-[0.35em] text-primary-foreground/40 uppercase mt-0.5">
            Smart Communities
          </span>
        </div>
      )}
    </Wrapper>
  );
}
