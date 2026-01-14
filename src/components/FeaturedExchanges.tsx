import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { Button } from "@/components/ui/button";

const exchanges = [
  {
    offering: "Web Development",
    seeking: "Spanish Lessons",
    user: "Maya Chen",
    avatar: "👩‍💻",
    location: "San Francisco, CA",
  },
  {
    offering: "Piano Teaching",
    seeking: "Yoga Instruction",
    user: "James Okonkwo",
    avatar: "🎹",
    location: "London, UK",
  },
  {
    offering: "Organic Gardening",
    seeking: "Photography Skills",
    user: "Luna Rodriguez",
    avatar: "🌱",
    location: "Austin, TX",
  },
  {
    offering: "Business Consulting",
    seeking: "Pottery Classes",
    user: "Erik Svensson",
    avatar: "📊",
    location: "Stockholm, Sweden",
  },
  {
    offering: "French Cooking",
    seeking: "Guitar Lessons",
    user: "Marie Dubois",
    avatar: "👨‍🍳",
    location: "Paris, France",
  },
  {
    offering: "Graphic Design",
    seeking: "Surfing Lessons",
    user: "Kai Nakamura",
    avatar: "🎨",
    location: "Sydney, Australia",
  },
];

export const FeaturedExchanges = () => {
  return (
    <section id="exchanges" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Active Exchanges
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what skills are flowing through the network right now. Find your next connection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {exchanges.map((exchange, index) => (
            <SkillCard key={exchange.user} {...exchange} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="glow" size="lg">
            View All Exchanges
          </Button>
        </div>
      </div>
    </section>
  );
};
