import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2024",
      title: "Project Initiation",
      description: "Launched under Ministry of Mines Problem Statement 25069",
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Advanced machine learning models for LCA predictions",
    },
    {
      year: "Future",
      title: "Industry Adoption",
      description: "Nationwide implementation across metallurgical sectors",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Our Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering sustainable metallurgy through AI-driven Life Cycle Assessment, 
            supporting India's transition to a circular economy.
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-20">
          <div className="bg-gradient-card rounded-lg border border-border p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Problem Statement 25069</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                The metallurgical industry faces significant challenges in quantifying and optimizing 
                environmental impacts across the entire lifecycle of metals processing. Traditional 
                LCA methods are time-intensive, data-scarce, and lack the sophisticated analysis 
                needed for circular economy implementation.
              </p>
              <p>
                Our platform addresses these challenges by leveraging artificial intelligence to 
                automate data collection, predict environmental impacts, and provide actionable 
                insights for sustainable metallurgical practices.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We've developed a comprehensive AI-driven platform that revolutionizes how 
                  life cycle assessments are conducted in metallurgy and mining operations.
                </p>
                <p>
                  By integrating machine learning algorithms with extensive environmental databases, 
                  our platform can automatically fill data gaps, predict emissions, and calculate 
                  circularity indicators with unprecedented accuracy.
                </p>
                <p>
                  The platform specifically focuses on critical materials including aluminium, 
                  copper, and other strategic minerals essential to India's industrial growth.
                </p>
              </div>
              <Button asChild className="mt-6" size="lg">
                <Link to="/dashboard">
                  Explore Platform <Lightbulb className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-secondary/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Capabilities</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Automated data collection and validation
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  ML-powered emission predictions
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Circularity indicator calculations
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Interactive visualization dashboards
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Comprehensive reporting and recommendations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Institutional Support */}
        <section className="mb-20">
          <div className="bg-gradient-hero rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Institutional Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  Ministry of Mines
                </h3>
                <p className="text-primary-foreground/90">
                  Government of India's flagship initiative to modernize mining and 
                  metallurgical practices through digital transformation.
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  JNARDDC
                </h3>
                <p className="text-primary-foreground/90">
                  Jawaharlal Nehru Aluminium Research Development and Design Centre, 
                  providing technical expertise and industry validation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Project Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent-foreground">
                    {milestone.year.slice(-2)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-secondary/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Join the Sustainability Revolution
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of the transformation towards sustainable metallurgy. 
              Contact us to learn how our platform can benefit your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;