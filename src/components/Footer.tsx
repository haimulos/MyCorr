import { Sprout } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-spore" />
              </div>
              <span className="font-serif text-xl">Mycelium</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              A community built on the ancient wisdom of nature's underground networks. 
              Trade skills, not money. Grow together.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Explore</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Browse Skills</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2026 Mycelium. Growing communities, one exchange at a time.</p>
        </div>
      </div>
    </footer>
  );
};
