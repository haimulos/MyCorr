import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface SkillCardProps {
  offering: string;
  seeking: string;
  user: string;
  avatar: string;
  location: string;
  index: number;
}

export const SkillCard = ({ offering, seeking, user, avatar, location, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl p-6 shadow-organic border border-border/50 cursor-pointer transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
          <span className="text-2xl">{avatar}</span>
        </div>
        <div>
          <h4 className="font-medium text-foreground">{user}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-spore mt-2 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Offering</p>
            <p className="font-serif text-lg text-foreground">{offering}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-secondary/50 rounded-full p-2">
            <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-forest-mid mt-2 flex-shrink-0" />
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Seeking</p>
            <p className="font-serif text-lg text-foreground">{seeking}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
