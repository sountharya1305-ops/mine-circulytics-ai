import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Recycle, BarChart3, FileText, ChevronRight, Leaf, Factory, TrendingUp } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/lca-hero.jpg";

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered LCA Analysis",
      description: "Leverage machine learning to automatically fill missing data, predict emissions, and optimize assessment accuracy.",
    },
    {
      icon: Recycle,
      title: "Circularity Analysis",
      description: "Advanced algorithms to assess and compare linear vs. circular processing pathways in metallurgy.",
    },
    {
      icon: BarChart3,
      title: "Interactive Visualization",
      description: "Dynamic Sankey diagrams, carbon footprint charts, and comprehensive sustainability dashboards.",
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Generate detailed PDF and Excel reports with actionable sustainability recommendations.",
    },
  ];

  const impacts = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reduce carbon footprint by up to 40% through optimized circular processing pathways.",
    },
    {
      icon: Factory,
      title: "Industry Transformation",
      description: "Supporting sustainable practices in aluminium, copper, and critical mineral processing.",
    },
    {
      icon: TrendingUp,
      title: "Economic Benefits",
      description: "Identify cost-saving opportunities while advancing sustainability goals.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="inline-block px-3 py-1 bg-accent-light/20 rounded-full text-accent text-sm font-medium mb-4">
                Problem Statement 25069
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                AI-Driven Life Cycle Assessment for{" "}
                <span className="text-accent">Sustainable Metallurgy</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg leading-relaxed">
                Advancing circular economy in mining through cutting-edge AI technology. 
                Optimize sustainability across the entire metallurgical value chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link to="/dashboard">
                    Start Analysis <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Sustainable metallurgy and mining operations with AI technology"
                className="rounded-lg shadow-large w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive LCA Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-driven platform provides end-to-end life cycle assessment capabilities 
              specifically designed for metallurgy and mining operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Driving Sustainable Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supporting the circular economy in metallurgy through data-driven insights 
              and actionable sustainability recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center justify-center w-16 h-16 bg-sustainability-light rounded-full mx-auto mb-6">
                  <impact.icon className="h-8 w-8 text-sustainability" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{impact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent-foreground mb-6">
            Ready to Transform Your LCA Process?
          </h2>
          <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto mb-8">
            Join researchers, engineers, and policymakers in advancing sustainable 
            metallurgy through AI-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent-foreground text-accent font-semibold">
              <Link to="/dashboard">
                Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;