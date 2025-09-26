import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, BookOpen, Database, FileText, Globe } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "LCA Databases",
      icon: Database,
      description: "Comprehensive environmental databases for life cycle assessment",
      resources: [
        {
          name: "Ecoinvent Database",
          description: "World's leading LCA database with detailed environmental data",
          type: "Database",
          access: "Subscription",
          url: "#"
        },
        {
          name: "GaBi Database",
          description: "Professional LCA database for industrial applications",
          type: "Database", 
          access: "Commercial",
          url: "#"
        },
        {
          name: "IDEMAT Database",
          description: "Open-access environmental data for materials",
          type: "Database",
          access: "Free",
          url: "#"
        }
      ]
    },
    {
      title: "Guidelines & Standards",
      icon: BookOpen,
      description: "International standards and best practices for LCA methodology",
      resources: [
        {
          name: "ISO 14040:2006",
          description: "Environmental management - Life cycle assessment - Principles and framework",
          type: "Standard",
          access: "ISO",
          url: "#"
        },
        {
          name: "ISO 14044:2006",
          description: "Environmental management - Life cycle assessment - Requirements and guidelines",
          type: "Standard",
          access: "ISO",
          url: "#"
        },
        {
          name: "ILCD Handbook",
          description: "General guide for Life Cycle Assessment - Detailed guidance",
          type: "Guide",
          access: "Free",
          url: "#"
        },
        {
          name: "PEF Methodology",
          description: "Product Environmental Footprint methodology guide",
          type: "Guide",
          access: "Free",
          url: "#"
        }
      ]
    },
    {
      title: "Sustainability Reports",
      icon: FileText,
      description: "Industry reports and research on sustainable metallurgy",
      resources: [
        {
          name: "Global Metal Sustainability Report 2024",
          description: "Comprehensive analysis of sustainability trends in metallurgy",
          type: "Report",
          access: "Free",
          url: "#"
        },
        {
          name: "Circular Economy in Mining",
          description: "Best practices for implementing circular economy principles",
          type: "Whitepaper",
          access: "Free",
          url: "#"
        },
        {
          name: "Critical Minerals Strategy",
          description: "Government strategy for sustainable critical mineral supply",
          type: "Policy",
          access: "Free",
          url: "#"
        }
      ]
    },
    {
      title: "Software Tools",
      icon: Globe,
      description: "LCA software and calculation tools",
      resources: [
        {
          name: "OpenLCA",
          description: "Open source LCA software for comprehensive assessments",
          type: "Software",
          access: "Free",
          url: "#"
        },
        {
          name: "SimaPro",
          description: "Professional LCA software with advanced modeling capabilities",
          type: "Software",
          access: "Commercial",
          url: "#"
        },
        {
          name: "GaBi LCA",
          description: "Enterprise LCA solution for large-scale assessments",
          type: "Software",
          access: "Commercial",
          url: "#"
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "Getting Started with LCA",
      description: "Comprehensive guide for beginners to understand LCA methodology and applications in metallurgy.",
      type: "Tutorial",
      duration: "45 min read",
      badge: "Recommended"
    },
    {
      title: "Circular Economy Indicators",
      description: "Framework for measuring and evaluating circularity in metal processing operations.",
      type: "Framework",
      duration: "30 min read",
      badge: "New"
    },
    {
      title: "AI in Environmental Assessment",
      description: "How artificial intelligence is transforming environmental impact assessment practices.",
      type: "Research",
      duration: "20 min read",
      badge: "Featured"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Resources & Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive databases, guidelines, and tools for life cycle assessment 
            and sustainable metallurgy practices.
          </p>
        </div>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={
                      resource.badge === "Recommended" ? "default" :
                      resource.badge === "New" ? "secondary" :
                      "outline"
                    }>
                      {resource.badge}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{resource.type}</span>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{resource.duration}</span>
                    <Button size="sm" variant="outline">
                      Read More <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section className="space-y-12">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="hover:shadow-soft transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge 
                          variant={
                            resource.access === "Free" ? "default" :
                            resource.access === "Subscription" ? "secondary" :
                            "outline"
                          }
                        >
                          {resource.access}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          {resource.access === "Free" && (
                            <Button size="sm">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Additional Resources */}
        <section className="mt-16">
          <div className="bg-gradient-card rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need Additional Resources?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team can help you access specialized 
              databases, custom reports, or connect you with industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 sm:flex-none">
                Request Custom Resources
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                Contact Expert Team
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "LCA Calculator", icon: "🧮" },
              { name: "Data Templates", icon: "📊" },
              { name: "Video Tutorials", icon: "🎥" },
              { name: "FAQ", icon: "❓" },
              { name: "Case Studies", icon: "📋" },
              { name: "Best Practices", icon: "⭐" },
              { name: "API Documentation", icon: "⚙️" },
              { name: "Community Forum", icon: "💬" }
            ].map((item, index) => (
              <Button key={index} variant="outline" className="h-20 flex-col justify-center">
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-xs">{item.name}</span>
              </Button>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resources;