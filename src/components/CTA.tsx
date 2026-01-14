import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="community" className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mycelium" />
      <motion.div
        className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-spore/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full bg-forest-mid/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Ready to Join the{" "}
            <span className="text-gradient-forest">Network?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Start sharing your skills today. No money changes hands—just knowledge, 
            experience, and human connection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Create Your Profile
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="organic" size="xl">
              Learn More
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free to join. No fees, ever. Just pure skill exchange.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
