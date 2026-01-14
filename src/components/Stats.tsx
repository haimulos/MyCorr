import { motion } from "framer-motion";

const stats = [
  { value: "12,400+", label: "Community Members" },
  { value: "45,000+", label: "Skills Exchanged" },
  { value: "180+", label: "Countries" },
  { value: "98%", label: "Satisfaction Rate" },
];

export const Stats = () => {
  return (
    <section className="py-16 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-serif text-3xl md:text-4xl text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
