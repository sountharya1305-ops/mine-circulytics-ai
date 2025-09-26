import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient = "bg-gradient-card" }: FeatureCardProps) => {
  return (
    <div className={`${gradient} rounded-lg border border-border p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1`}>
      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;