import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Download, Mail, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportsModule = () => {
  const [reportType, setReportType] = useState<string>("");
  const [selectedSections, setSelectedSections] = useState<string[]>([
    "executive-summary",
    "environmental-impact",
    "recommendations"
  ]);
  const { toast } = useToast();

  const reportSections = [
    { id: "executive-summary", label: "Executive Summary", required: true },
    { id: "methodology", label: "LCA Methodology" },
    { id: "data-sources", label: "Data Sources & Assumptions" },
    { id: "environmental-impact", label: "Environmental Impact Assessment", required: true },
    { id: "circularity-analysis", label: "Circularity Analysis" },
    { id: "comparison", label: "Linear vs Circular Comparison" },
    { id: "visualizations", label: "Charts & Visualizations" },
    { id: "recommendations", label: "Sustainability Recommendations", required: true },
    { id: "appendices", label: "Technical Appendices" }
  ];

  const handleSectionChange = (sectionId: string, checked: boolean) => {
    if (checked) {
      setSelectedSections([...selectedSections, sectionId]);
    } else {
      // Don't allow removing required sections
      const section = reportSections.find(s => s.id === sectionId);
      if (section?.required) return;
      
      setSelectedSections(selectedSections.filter(id => id !== sectionId));
    }
  };

  const handleGenerateReport = (format: string) => {
    toast({
      title: "Report Generated",
      description: `${format.toUpperCase()} report is being prepared for download.`,
    });
  };

  const handleEmailReport = () => {
    toast({
      title: "Report Sent",
      description: "Report has been sent to your email address.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2 text-primary" />
          Reports & Documentation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Report Configuration */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Report Type
            </label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comprehensive">Comprehensive LCA Report</SelectItem>
                <SelectItem value="summary">Executive Summary</SelectItem>
                <SelectItem value="compliance">Regulatory Compliance Report</SelectItem>
                <SelectItem value="comparison">Circular vs Linear Comparison</SelectItem>
                <SelectItem value="technical">Technical Documentation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Report Sections */}
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Include Sections
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {reportSections.map((section) => (
                <div key={section.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={section.id}
                    checked={selectedSections.includes(section.id)}
                    onCheckedChange={(checked) => handleSectionChange(section.id, !!checked)}
                    disabled={section.required}
                  />
                  <label 
                    htmlFor={section.id} 
                    className={`text-sm ${section.required ? 'font-medium' : ''} text-foreground`}
                  >
                    {section.label}
                    {section.required && <span className="text-destructive ml-1">*</span>}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Report Preview */}
        <div className="bg-secondary/30 rounded-lg p-4 space-y-3">
          <h3 className="font-semibold text-foreground">Report Preview</h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Report Type: <span className="font-medium">{reportType || "Not selected"}</span></div>
            <div>Sections: <span className="font-medium">{selectedSections.length}</span></div>
            <div>Estimated Pages: <span className="font-medium">25-30</span></div>
            <div>Generation Time: <span className="font-medium">~2 minutes</span></div>
          </div>
        </div>

        {/* Generation Actions */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Generate & Download</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              onClick={() => handleGenerateReport("pdf")}
              disabled={!reportType}
              className="flex items-center justify-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF Report
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => handleGenerateReport("excel")}
              disabled={!reportType}
              className="flex items-center justify-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Excel Data
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button 
              variant="outline"
              onClick={handleEmailReport}
              disabled={!reportType}
              className="flex items-center justify-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Report
            </Button>
            
            <Button 
              variant="outline"
              disabled={!reportType}
              className="flex items-center justify-center"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Link
            </Button>
          </div>
        </div>

        {/* Report Templates */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Quick Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setReportType("summary")}
              className="text-left justify-start"
            >
              Executive Summary
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setReportType("compliance")}
              className="text-left justify-start"
            >
              Compliance Report
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setReportType("technical")}
              className="text-left justify-start"
            >
              Technical Analysis
            </Button>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Recent Reports</h3>
          <div className="space-y-2">
            {[
              { name: "Aluminium LCA Report - March 2025", date: "2 days ago", size: "2.4 MB" },
              { name: "Copper Circularity Analysis", date: "1 week ago", size: "1.8 MB" },
              { name: "Steel Processing Comparison", date: "2 weeks ago", size: "3.1 MB" }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <div className="font-medium text-foreground text-sm">{report.name}</div>
                  <div className="text-xs text-muted-foreground">{report.date} • {report.size}</div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default ReportsModule;