import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Brain, BarChart3, GitCompare, FileText } from "lucide-react";
import DataInputModule from "@/components/DataInputModule";
import AIModule from "@/components/AIModule";
import VisualizationModule from "@/components/VisualizationModule";
import ComparisonModule from "@/components/ComparisonModule";
import ReportsModule from "@/components/ReportsModule";

const Dashboard = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                LCA Analysis Dashboard
              </h1>
              <p className="text-muted-foreground">
                Comprehensive life cycle assessment for sustainable metallurgy
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-sustainability-light text-sustainability">
                Project: AL-2025-001
              </Badge>
              <Badge variant="outline">
                Status: Active
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Analysis</p>
                  <p className="text-2xl font-bold text-foreground">Aluminium</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Data Completeness</p>
                  <p className="text-2xl font-bold text-sustainability">85%</p>
                </div>
                <div className="w-12 h-12 bg-sustainability-light rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-sustainability" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Carbon Reduction</p>
                  <p className="text-2xl font-bold text-accent">62%</p>
                </div>
                <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                  <GitCompare className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reports Generated</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="space-y-8">
          <Tabs defaultValue="input" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="input" className="flex items-center">
                <Database className="h-4 w-4 mr-2" />
                Data Input
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center">
                <Brain className="h-4 w-4 mr-2" />
                AI Analysis
              </TabsTrigger>
              <TabsTrigger value="visualization" className="flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Visualization
              </TabsTrigger>
              <TabsTrigger value="comparison" className="flex items-center">
                <GitCompare className="h-4 w-4 mr-2" />
                Comparison
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Reports
              </TabsTrigger>
            </TabsList>

            <TabsContent value="input" className="mt-8">
              <DataInputModule />
            </TabsContent>

            <TabsContent value="ai" className="mt-8">
              <AIModule />
            </TabsContent>

            <TabsContent value="visualization" className="mt-8">
              <VisualizationModule />
            </TabsContent>

            <TabsContent value="comparison" className="mt-8">
              <ComparisonModule />
            </TabsContent>

            <TabsContent value="reports" className="mt-8">
              <ReportsModule />
            </TabsContent>
          </Tabs>
        </div>

        {/* Process Flow Indicator */}
        <div className="mt-12 bg-gradient-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Workflow</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">1</span>
                </div>
                <span className="ml-2 text-sm font-medium">Data Input</span>
              </div>
              <div className="w-8 h-px bg-border"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-semibold text-sm">2</span>
                </div>
                <span className="ml-2 text-sm font-medium">AI Processing</span>
              </div>
              <div className="w-8 h-px bg-border"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-sustainability rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">3</span>
                </div>
                <span className="ml-2 text-sm font-medium">Analysis & Visualization</span>
              </div>
              <div className="w-8 h-px bg-border"></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary border-2 border-primary rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">4</span>
                </div>
                <span className="ml-2 text-sm font-medium">Report Generation</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;