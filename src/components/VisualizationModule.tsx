import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";

const VisualizationModule = () => {
  // Sample data for demonstrations
  const carbonFootprintData = [
    { phase: "Extraction", raw: 1.2, recycled: 0.3 },
    { phase: "Processing", raw: 2.8, recycled: 1.1 },
    { phase: "Transport", raw: 0.4, recycled: 0.4 },
    { phase: "End-of-Life", raw: 0.6, recycled: 0.1 },
  ];

  const circularityData = [
    { name: "Recycled Content", value: 45, color: "#10b981" },
    { name: "Virgin Material", value: 55, color: "#6b7280" },
  ];

  const timelineData = [
    { month: "Jan", emissions: 2.4, target: 2.0 },
    { month: "Feb", emissions: 2.2, target: 2.0 },
    { month: "Mar", emissions: 2.1, target: 2.0 },
    { month: "Apr", emissions: 1.9, target: 2.0 },
    { month: "May", emissions: 1.8, target: 2.0 },
    { month: "Jun", emissions: 1.7, target: 2.0 },
  ];

  const sankeyNodes = [
    { id: "raw", label: "Raw Materials", x: 50, y: 100 },
    { id: "energy", label: "Energy", x: 50, y: 200 },
    { id: "process", label: "Processing", x: 200, y: 150 },
    { id: "product", label: "Product", x: 350, y: 150 },
    { id: "waste", label: "Waste", x: 350, y: 250 },
    { id: "recycle", label: "Recycling", x: 200, y: 300 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-primary" />
          Interactive Visualization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="carbon" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="carbon">Carbon Footprint</TabsTrigger>
            <TabsTrigger value="sankey">Material Flow</TabsTrigger>
            <TabsTrigger value="circularity">Circularity</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          {/* Carbon Footprint Comparison */}
          <TabsContent value="carbon" className="space-y-4">
            <div className="h-80">
              <h3 className="text-lg font-semibold mb-4">Linear vs Circular Processing Pathways</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={carbonFootprintData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="phase" />
                  <YAxis label={{ value: 'CO₂ eq (tons)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="raw" fill="hsl(var(--destructive))" name="Linear Processing" />
                  <Bar dataKey="recycled" fill="hsl(var(--sustainability))" name="Circular Processing" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-destructive/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-destructive">5.0 tons</div>
                <div className="text-sm text-muted-foreground">Linear Processing CO₂</div>
              </div>
              <div className="bg-sustainability-light p-4 rounded-lg">
                <div className="text-2xl font-bold text-sustainability">1.9 tons</div>
                <div className="text-sm text-muted-foreground">Circular Processing CO₂</div>
              </div>
            </div>
          </TabsContent>

          {/* Sankey Diagram Placeholder */}
          <TabsContent value="sankey" className="space-y-4">
            <div className="h-80 bg-secondary/30 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold">Interactive Sankey Diagram</h3>
                <div className="relative">
                  {/* Simplified Sankey visualization */}
                  <svg width="400" height="200" className="mx-auto">
                    {/* Nodes */}
                    {sankeyNodes.map((node, i) => (
                      <g key={node.id}>
                        <rect
                          x={node.x}
                          y={node.y}
                          width="80"
                          height="30"
                          fill="hsl(var(--primary))"
                          rx="4"
                        />
                        <text
                          x={node.x + 40}
                          y={node.y + 20}
                          textAnchor="middle"
                          fill="white"
                          fontSize="10"
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                    
                    {/* Flow lines */}
                    <path
                      d="M130 115 Q165 115 200 150"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M130 215 Q165 215 200 165"
                      stroke="hsl(var(--accent))"
                      strokeWidth="6"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M280 150 L350 150"
                      stroke="hsl(var(--sustainability))"
                      strokeWidth="10"
                      opacity="0.6"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Material and energy flows through the system</p>
              </div>
            </div>
          </TabsContent>

          {/* Circularity Dashboard */}
          <TabsContent value="circularity" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <h3 className="text-lg font-semibold mb-4">Material Composition</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={circularityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {circularityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Circularity Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded">
                    <span className="text-sm font-medium">Circularity Index</span>
                    <span className="text-lg font-bold text-sustainability">0.78</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded">
                    <span className="text-sm font-medium">Recycling Rate</span>
                    <span className="text-lg font-bold text-primary">65%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary/50 rounded">
                    <span className="text-sm font-medium">Material Efficiency</span>
                    <span className="text-lg font-bold text-accent">82%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Timeline Analysis */}
          <TabsContent value="timeline" className="space-y-4">
            <div className="h-80">
              <h3 className="text-lg font-semibold mb-4">Emissions Trend vs Targets</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'CO₂ eq (tons)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="emissions"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    name="Actual Emissions"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="hsl(var(--destructive))"
                    strokeDasharray="5 5"
                    name="Target"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default VisualizationModule;