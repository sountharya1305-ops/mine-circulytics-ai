import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileSpreadsheet, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DataInputModule = () => {
  const [inputMethod, setInputMethod] = useState<"upload" | "manual">("manual");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileSpreadsheet className="h-5 w-5 mr-2 text-primary" />
          Data Input Module
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Method Selection */}
        <div className="flex gap-4">
          <Button
            variant={inputMethod === "upload" ? "default" : "outline"}
            onClick={() => setInputMethod("upload")}
            className="flex-1"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload CSV/Excel
          </Button>
          <Button
            variant={inputMethod === "manual" ? "default" : "outline"}
            onClick={() => setInputMethod("manual")}
            className="flex-1"
          >
            <Plus className="h-4 w-4 mr-2" />
            Manual Entry
          </Button>
        </div>

        {/* File Upload */}
        {inputMethod === "upload" && (
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Upload your LCA data file (CSV, Excel supported)
            </p>
            <Input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
              className="max-w-xs mx-auto"
            />
          </div>
        )}

        {/* Manual Entry */}
        {inputMethod === "manual" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Material Information */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Material Information</h3>
              
              <div>
                <Label htmlFor="material-type">Material Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aluminium">Aluminium</SelectItem>
                    <SelectItem value="copper">Copper</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="critical-minerals">Critical Minerals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="processing-route">Processing Route</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raw">Raw Material Processing</SelectItem>
                    <SelectItem value="recycled">Recycled Material Processing</SelectItem>
                    <SelectItem value="hybrid">Hybrid Processing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="quantity">Quantity (tons)</Label>
                <Input id="quantity" type="number" placeholder="Enter quantity" />
              </div>
            </div>

            {/* Process Parameters */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Process Parameters</h3>
              
              <div>
                <Label htmlFor="energy-source">Primary Energy Source</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select energy source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coal">Coal</SelectItem>
                    <SelectItem value="natural-gas">Natural Gas</SelectItem>
                    <SelectItem value="renewable">Renewable Energy</SelectItem>
                    <SelectItem value="grid-mix">Grid Mix</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="energy-consumption">Energy Consumption (MWh/ton)</Label>
                <Input id="energy-consumption" type="number" placeholder="Enter energy consumption" />
              </div>

              <div>
                <Label htmlFor="transport-distance">Transport Distance (km)</Label>
                <Input id="transport-distance" type="number" placeholder="Enter transport distance" />
              </div>
            </div>

            {/* End-of-Life */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-semibold text-foreground">End-of-Life Management</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="recycling-rate">Recycling Rate (%)</Label>
                  <Input id="recycling-rate" type="number" placeholder="Enter percentage" />
                </div>
                <div>
                  <Label htmlFor="landfill-rate">Landfill Rate (%)</Label>
                  <Input id="landfill-rate" type="number" placeholder="Enter percentage" />
                </div>
                <div>
                  <Label htmlFor="incineration-rate">Incineration Rate (%)</Label>
                  <Input id="incineration-rate" type="number" placeholder="Enter percentage" />
                </div>
              </div>

              <div>
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea 
                  id="additional-notes" 
                  placeholder="Enter any additional process details or assumptions..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button className="flex-1">
            Save Data
          </Button>
          <Button variant="outline" className="flex-1">
            Preview Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataInputModule;