import { motion } from "framer-motion";
import { Users, Repeat, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Root Yourself",
    description: "Create your profile and list the skills you can share with the community. From coding to cooking, every ability has value.",
  },
  {
    icon: Repeat,
    title: "Find Connections",
    description: "Discover others whose skills complement yours. Our algorithm finds matches where both parties benefit, just like trees sharing nutrients.",
  },
  {
    icon: Sparkles,
    title: "Exchange & Grow",
    description: "Trade skills directly. Teach someone guitar in exchange for language lessons. Watch your network flourish.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            How the Network Grows
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Like mycelium connecting a forest, we link people through the exchange of knowledge and skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <motion.div
                  className="absolute -inset-2 rounded-3xl bg-spore/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting lines between steps */}
        <div className="hidden md:flex justify-center mt-8">
          <svg width="600" height="20" className="opacity-30">
            <motion.path
              d="M 50 10 Q 175 10 300 10 Q 425 10 550 10"
              stroke="hsl(152 40% 30%)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
