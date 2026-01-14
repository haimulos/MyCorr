import { motion } from "framer-motion";

interface NetworkNodeProps {
  x: number;
  y: number;
  size?: number;
  delay?: number;
  glowing?: boolean;
}

export const NetworkNode = ({ x, y, size = 8, delay = 0, glowing = false }: NetworkNodeProps) => {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      className={glowing ? "fill-spore" : "fill-forest-mid"}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: glowing ? [0.6, 1, 0.6] : 0.8,
      }}
      transition={{
        scale: { delay, duration: 0.5, ease: "easeOut" },
        opacity: glowing 
          ? { delay, duration: 2, repeat: Infinity, ease: "easeInOut" }
          : { delay, duration: 0.5 }
      }}
    />
  );
};

interface NetworkLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}

export const NetworkLine = ({ x1, y1, x2, y2, delay = 0 }: NetworkLineProps) => {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-forest-mid/30"
      strokeWidth={2}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay, duration: 1, ease: "easeInOut" }}
    />
  );
};
