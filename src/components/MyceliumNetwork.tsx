import { motion } from "framer-motion";
import { NetworkNode, NetworkLine } from "./NetworkNode";

const nodes = [
  { x: 100, y: 150, size: 12, glowing: true },
  { x: 250, y: 80, size: 8 },
  { x: 400, y: 120, size: 10, glowing: true },
  { x: 550, y: 60, size: 6 },
  { x: 180, y: 250, size: 8 },
  { x: 320, y: 200, size: 14, glowing: true },
  { x: 480, y: 180, size: 8 },
  { x: 620, y: 140, size: 10 },
  { x: 150, y: 350, size: 6 },
  { x: 280, y: 320, size: 10, glowing: true },
  { x: 420, y: 280, size: 8 },
  { x: 560, y: 250, size: 12, glowing: true },
  { x: 700, y: 200, size: 8 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [6, 7],
  [4, 8], [8, 9], [9, 10], [10, 11], [11, 12], [5, 10], [1, 5], [6, 11],
  [2, 6], [3, 7], [9, 5], [10, 6],
];

export const MyceliumNetwork = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg 
        className="w-full h-full opacity-60"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Gradient definitions */}
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(168 70% 50% / 0.4)" />
            <stop offset="100%" stopColor="hsl(168 70% 50% / 0)" />
          </radialGradient>
        </defs>

        {/* Connection lines */}
        {connections.map(([from, to], index) => (
          <NetworkLine
            key={`line-${index}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            delay={index * 0.1}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <NetworkNode
            key={`node-${index}`}
            {...node}
            delay={index * 0.08}
          />
        ))}

        {/* Glow effects for special nodes */}
        {nodes.filter(n => n.glowing).map((node, index) => (
          <motion.circle
            key={`glow-${index}`}
            cx={node.x}
            cy={node.y}
            r={node.size * 3}
            fill="url(#glowGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ delay: index * 0.2, duration: 3, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
};
