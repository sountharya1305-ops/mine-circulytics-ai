import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, TrendingUp, AlertCircle } from "lucide-react";

const AIModule = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAIAnalysis = () => {
    setIsProcessing(true);
    setProgress(0);

    // Simulate AI processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const predictions = [
    {
      metric: "Carbon Footprint",
      value: "2.4 tons CO₂-eq",
      confidence: 92,
      trend: "down",
      status: "good"
    },
    {
      metric: "Water Usage",
      value: "15.6 m³",
      confidence: 88,
      trend: "up",
      status: "warning"
    },
    {
      metric: "Energy Consumption", 
      value: "4.2 MWh",
      confidence: 95,
      trend: "down",
      status: "good"
    },
    {
      metric: "Circularity Index",
      value: "0.78",
      confidence: 85,
      trend: "up",
      status: "excellent"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-primary" />
          AI/ML Predictions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* AI Processing Controls */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button 
              onClick={handleAIAnalysis}
              disabled={isProcessing}
              className="flex-1"
            >
              <Zap className="h-4 w-4 mr-2" />
              {isProcessing ? "Processing..." : "Run AI Analysis"}
            </Button>
            <Button variant="outline" className="flex-1">
              <Brain className="h-4 w-4 mr-2" />
              Auto-Fill Missing Data
            </Button>
          </div>

          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Processing LCA data...</span>
                <span className="text-muted-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}
        </div>

        {/* AI Predictions Results */}
        {progress === 100 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-semibold text-foreground flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              AI Predictions & Insights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {predictions.map((prediction, index) => (
                <div key={index} className="border border-border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{prediction.metric}</span>
                    <Badge variant={
                      prediction.status === "excellent" ? "default" :
                      prediction.status === "good" ? "secondary" :
                      "destructive"
                    }>
                      {prediction.confidence}% confidence
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">{prediction.value}</span>
                    <div className="flex items-center">
                      {prediction.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Recommendations */}
            <div className="bg-accent-light rounded-lg p-4">
              <h4 className="font-semibold text-foreground flex items-center mb-3">
                <AlertCircle className="h-4 w-4 mr-2" />
                AI Recommendations
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Consider increasing recycled content to improve circularity index by 15%
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Switch to renewable energy sources to reduce carbon footprint by 28%
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Optimize transport routes to decrease overall environmental impact
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Missing Data Indicators */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Data Completeness</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-xs text-muted-foreground">Energy Data</div>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">67%</div>
              <div className="text-xs text-muted-foreground">Transport Data</div>
            </div>
            <div className="text-center p-3 bg-secondary/50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">45%</div>
              <div className="text-xs text-muted-foreground">End-of-Life Data</div>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default AIModule;