import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" } & HTMLMotionProps<"div">) {
  const Comp = as === "section" ? motion.section : motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
