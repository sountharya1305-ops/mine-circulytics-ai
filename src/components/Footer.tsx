import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-foreground">LCA Platform</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              AI-driven Life Cycle Assessment platform for sustainable metallurgy and mining. 
              Advancing circular economy principles through cutting-edge technology.
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>Problem Statement: 25069</p>
              <p>Supported by Ministry of Mines & JNARDDC</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">LCA Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ecoinvent Database</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Ministry of Mines · JNARDDC · AI-Driven LCA Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;