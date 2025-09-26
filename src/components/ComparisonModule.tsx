import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

const ComparisonModule = () => {
  const comparisons = [
    {
      metric: "Carbon Footprint",
      linear: { value: "5.0", unit: "tons CO₂-eq" },
      circular: { value: "1.9", unit: "tons CO₂-eq" },
      improvement: "62%",
      trend: "down"
    },
    {
      metric: "Water Consumption",
      linear: { value: "25.4", unit: "m³" },
      circular: { value: "15.6", unit: "m³" },
      improvement: "39%",
      trend: "down"
    },
    {
      metric: "Energy Usage",
      linear: { value: "7.2", unit: "MWh" },
      circular: { value: "4.2", unit: "MWh" },
      improvement: "42%",
      trend: "down"
    },
    {
      metric: "Waste Generation",
      linear: { value: "2.8", unit: "tons" },
      circular: { value: "0.6", unit: "tons" },
      improvement: "79%",
      trend: "down"
    },
    {
      metric: "Cost per Ton",
      linear: { value: "$1,250", unit: "" },
      circular: { value: "$980", unit: "" },
      improvement: "22%",
      trend: "down"
    },
    {
      metric: "Material Efficiency",
      linear: { value: "65%", unit: "" },
      circular: { value: "82%", unit: "" },
      improvement: "17%",
      trend: "up"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ArrowRight className="h-5 w-5 mr-2 text-primary" />
          Linear vs Circular Pathway Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-secondary/30 rounded-lg font-semibold text-sm">
            <div>Metric</div>
            <div className="text-center">Linear Processing</div>
            <div className="text-center">Circular Processing</div>
            <div className="text-center">Improvement</div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 p-4 border border-border rounded-lg hover:bg-secondary/20 transition-colors">
              <div className="font-medium text-foreground">{item.metric}</div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-destructive">
                  {item.linear.value}
                </div>
                <div className="text-xs text-muted-foreground">{item.linear.unit}</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold text-sustainability">
                  {item.circular.value}
                </div>
                <div className="text-xs text-muted-foreground">{item.circular.unit}</div>
              </div>
              
              <div className="text-center">
                <Badge 
                  variant={item.trend === "down" ? "default" : "secondary"}
                  className="flex items-center gap-1"
                >
                  {item.trend === "down" ? (
                    <TrendingDown className="h-3 w-3" />
                  ) : (
                    <TrendingUp className="h-3 w-3" />
                  )}
                  {item.improvement}
                </Badge>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="bg-gradient-accent rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-accent-foreground mb-2">
              Overall Environmental Impact Reduction
            </h3>
            <div className="text-3xl font-bold text-accent-foreground mb-2">
              52%
            </div>
            <p className="text-accent-foreground/90 text-sm">
              Average improvement across all sustainability metrics through circular processing
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonModule;