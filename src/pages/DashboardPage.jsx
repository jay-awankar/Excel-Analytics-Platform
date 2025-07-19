// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef, useEffect } from "react";
import * as echarts from "echarts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "../components/Header";
import DashboardHeader from "../components/dashboard/Dashboard.Header";
import Footer from "../components/Footer";
const DashboardPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedChartType, setSelectedChartType] = useState("bar");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const fileInputRef = useRef(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  // Mock data for the uploaded Excel file
  const mockExcelData = {
    headers: ["Month", "Revenue", "Expenses", "Profit"],
    rows: [
      ["January", 12500, 8000, 4500],
      ["February", 15000, 8500, 6500],
      ["March", 18000, 9000, 9000],
      ["April", 22000, 10500, 11500],
      ["May", 25000, 11000, 14000],
      ["June", 28000, 12000, 16000],
    ],
  };
  // Mock column mapping
  const [columnMapping, setColumnMapping] = useState({
    xAxis: "Month",
    yAxis: "Revenue",
  });
  // Chart customization options
  const [chartOptions, setChartOptions] = useState({
    showLegend: true,
    showGrid: true,
    enableAnimation: false,
    colorScheme: "indigo-purple",
    title: "Revenue Analysis",
  });
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // Initialize and update chart
  useEffect(() => {
    if (chartRef.current && uploadedFile) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current);
      }
      const xAxisData = mockExcelData.rows.map((row) => row[0]);
      const yAxisIndex = mockExcelData.headers.indexOf(columnMapping.yAxis);
      const yAxisData = mockExcelData.rows.map((row) => row[yAxisIndex]);
      let colorGradient;
      switch (chartOptions.colorScheme) {
        case "indigo-purple":
          colorGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#6366f1" },
            { offset: 1, color: "#a855f7" },
          ]);
          break;
        case "blue-teal":
          colorGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#3b82f6" },
            { offset: 1, color: "#14b8a6" },
          ]);
          break;
        case "red-orange":
          colorGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#ef4444" },
            { offset: 1, color: "#f97316" },
          ]);
          break;
        default:
          colorGradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#6366f1" },
            { offset: 1, color: "#a855f7" },
          ]);
      }
      const option = {
        animation: chartOptions.enableAnimation,
        title: {
          text: chartOptions.title,
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          show: chartOptions.showGrid,
          borderColor: "rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
        xAxis: [
          {
            type: "category",
            data: xAxisData,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
            },
            axisLabel: {
              color: "rgba(255, 255, 255, 0.7)",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
            },
            axisLabel: {
              color: "rgba(255, 255, 255, 0.7)",
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
        ],
        legend: {
          show: chartOptions.showLegend,
          top: "bottom",
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            name: columnMapping.yAxis,
            type: selectedChartType,
            barWidth: "60%",
            data: yAxisData,
            itemStyle: {
              color: colorGradient,
            },
            lineStyle: {
              width: 3,
              color: colorGradient,
            },
            smooth: selectedChartType === "line",
          },
        ],
      };
      chartInstance.current.setOption(option);
      const handleResize = () => {
        chartInstance.current?.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [uploadedFile, columnMapping, selectedChartType, chartOptions, chartRef, chartInstance, mockExcelData.rows, mockExcelData.headers]);
  const handleFileUpload = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      if (
        !file.name.toLowerCase().endsWith(".xlsx") &&
        !file.name.toLowerCase().endsWith(".xls")
      ) {
        setShowSuccessAlert(false);
        const alert = document.createElement("div");
        alert.className =
          "fixed bottom-20 right-4 z-50 animate-in fade-in slide-in-from-right-10 duration-300";
        alert.innerHTML = `
<div class="bg-red-900 border border-red-700 text-white px-4 py-3 rounded-lg shadow-lg">
<div class="flex items-center">
<i class="fas fa-exclamation-circle text-red-400 mr-2"></i>
<p>Please select a valid Excel file (.xlsx or .xls)</p>
</div>
</div>
`;
        document.body.appendChild(alert);
        setTimeout(() => {
          document.body.removeChild(alert);
        }, 3000);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }
      setIsUploading(true);
      setUploadProgress(0);
      setShowSuccessAlert(false);
      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setUploadedFile(file);
            setActiveStep(2);
            // Show success message
            const alert = document.createElement("div");
            alert.className =
              "fixed bottom-20 right-4 z-50 animate-in fade-in slide-in-from-right-10 duration-300";
            alert.innerHTML = `
<div class="bg-green-900 border border-green-700 text-white px-4 py-3 rounded-lg shadow-lg">
<div class="flex items-center">
<i class="fas fa-check-circle text-green-400 mr-2"></i>
<p>File uploaded successfully!</p>
</div>
</div>
`;
            document.body.appendChild(alert);
            setTimeout(() => {
              document.body.removeChild(alert);
            }, 3000);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
  };
  useEffect(() => {
    const selectExcelBtn = document.getElementById("select-excel-btn");
    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
    if (selectExcelBtn) {
      selectExcelBtn.addEventListener("click", handleClick);
    }
    return () => {
      if (selectExcelBtn) {
        selectExcelBtn.removeEventListener("click", handleClick);
      }
    };
  }, [fileInputRef]);
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && (file.name.endsWith(".xlsx") || file.name.endsWith(".xls"))) {
      setIsUploading(true);
      setUploadProgress(0);
      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setUploadedFile(file);
            setActiveStep(2);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };
  const handleColumnMappingChange = (axis, value) => {
    setColumnMapping((prev) => ({
      ...prev,
      [axis]: value,
    }));
  };
  const handleChartTypeChange = () => {
    setSelectedChartType();
  };
  const handleExportChart = () => {
    if (chartInstance.current) {
      const url = chartInstance.current.getDataURL({
        type: "png",
        pixelRatio: 2,
        backgroundColor: "#1e1e2e",
      });
      const link = document.createElement("a");
      link.download = `${chartOptions.title.replace(/\s+/g, "_")}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000);
    }
  };
  const chartTypes = [
    { id: "bar", name: "Bar Chart", icon: "fa-chart-bar" },
    { id: "line", name: "Line Chart", icon: "fa-chart-line" },
    { id: "scatter", name: "Scatter Plot", icon: "fa-braille" },
    { id: "pie", name: "Pie Chart", icon: "fa-chart-pie" },
    { id: "area", name: "Area Chart", icon: "fa-chart-area" },
    { id: "radar", name: "Radar Chart", icon: "fa-spider" },
  ];
  const colorSchemes = [
    {
      id: "indigo-purple",
      name: "Indigo Purple",
      primary: "#6366f1",
      secondary: "#a855f7",
    },
    {
      id: "blue-teal",
      name: "Blue Teal",
      primary: "#3b82f6",
      secondary: "#14b8a6",
    },
    {
      id: "red-orange",
      name: "Red Orange",
      primary: "#ef4444",
      secondary: "#f97316",
    },
  ];
  const recentFiles = [
    { name: "Q1_Sales_Report.xlsx", date: "2025-04-22", size: "1.2 MB" },
    { name: "Marketing_Analytics.xlsx", date: "2025-04-20", size: "3.5 MB" },
    {
      name: "Customer_Survey_Results.xlsx",
      date: "2025-04-15",
      size: "2.8 MB",
    },
  ];
  return (
    <>
    {/* Navigation */}
    <Header />
    
    <div className="min-h-screen bg-black text-white px-3  md:px-16 pt-3">


      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">

          {/* Page Header */}
          <DashboardHeader />

          {/* Step Indicator */}
          <div className="mb-10">
            <div className="flex items-center">
              {[
                { step: 1, title: "Upload File" },
                { step: 2, title: "Preview Data" },
                { step: 3, title: "Customize Chart" },
                { step: 4, title: "Export & Share" },
              ].map((step, index) => (
                <React.Fragment key={step.step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeStep >= step.step
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {activeStep > step.step ? (
                        <i className="fas fa-check"></i>
                      ) : (
                        step.step
                      )}
                    </div>
                    <span
                      className={`mt-2 text-sm ${
                        activeStep >= step.step ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < 3 && (
                    <div
                      className={`w-24 h-1 mx-2 ${
                        activeStep > step.step
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                          : "bg-gray-800"
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Panel - File Upload & Options */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <i className="fas fa-file-upload text-indigo-400 mr-2"></i>
                    Upload Excel File
                  </CardTitle>
                  <CardDescription>
                    Supported formats: .xls, .xlsx
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 ${
                      isUploading
                        ? "border-indigo-500 bg-indigo-500/10"
                        : "border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/5"
                    } transition-all cursor-pointer`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      id="excel-file-input"
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept=".xls,.xlsx"
                      onChange={handleFileUpload}
                    />
                    {isUploading ? (
                      <div className="space-y-4 text-white">
                        <div className="flex justify-center">
                          <i className="fas fa-spinner fa-spin text-4xl text-indigo-400"></i>
                        </div>
                        <p>Uploading file...</p>
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400">
                          {uploadProgress}% complete
                        </p>
                      </div>
                    ) : (
                      <>
                        {uploadedFile ? (
                          <div className="space-y-2 text-white">
                            <div className="w-16 h-16 mx-auto bg-indigo-900/30 rounded-lg flex items-center justify-center">
                              <i className="fas fa-file-excel text-3xl text-indigo-400"></i>
                            </div>
                            <p className="font-medium">{uploadedFile.name}</p>
                            <p className="text-sm text-gray-400">
                              {(uploadedFile.size / (1024 * 1024)).toFixed(2)}{" "}
                              MB • Uploaded successfully
                            </p>
                            <Badge className="bg-green-900 text-green-300">
                              Ready for analysis
                            </Badge>
                          </div>
                        ) : (
                          <div className="space-y-2 text-white">
                            <div className="w-16 h-16 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
                              <i className="fas fa-file-excel text-3xl text-gray-500"></i>
                            </div>
                            <p
                              className="font-medium hover:text-indigo-400 hover:underline transition-colors cursor-pointer"
                              onClick={() => fileInputRef.current?.click()}
                            >
                              Drag & drop your Excel file here
                            </p>
                            <p className="text-sm text-gray-400">
                              or click to browse files
                            </p>
                            <p className="text-xs text-gray-500">
                              Maximum file size: 10MB
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {uploadedFile && (
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-400 border-red-900 hover:bg-red-900/20 !rounded-button whitespace-nowrap cursor-pointer"
                        onClick={() => {
                          setUploadedFile(null);
                          if (fileInputRef.current)
                            fileInputRef.current.value = "";
                        }}
                      >
                        <i className="fas fa-trash-alt mr-2"></i> Remove File
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              {uploadedFile && (
                <>
                  <Card className="bg-gray-900 border-gray-800 mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <i className="fas fa-columns text-indigo-400 mr-2"></i>{" "}
                        Column Mapping
                      </CardTitle>
                      <CardDescription>
                        Assign columns to chart axes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="x-axis" className="text-white">
                          X-Axis
                        </Label>
                        <Select
                          value={columnMapping.xAxis}
                          onValueChange={(value) =>
                            handleColumnMappingChange("xAxis", value)
                          }
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue
                              placeholder="Select column"
                              className="text-white placeholder:text-gray-500"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {mockExcelData.headers.map((header) => (
                              <SelectItem
                                key={header}
                                value={header}
                                className="text-white hover:bg-gray-700"
                              >
                                {header}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="y-axis" className="text-white">
                          Y-Axis
                        </Label>
                        <Select
                          value={columnMapping.yAxis}
                          onValueChange={(value) =>
                            handleColumnMappingChange("yAxis", value)
                          }
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue
                              placeholder="Select column"
                              className="text-white placeholder:text-gray-500"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {mockExcelData.headers
                              .filter((h) => h !== "Month")
                              .map((header) => (
                                <SelectItem
                                  key={header}
                                  value={header}
                                  className="text-gray-200 hover:bg-gray-700"
                                >
                                  {header}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900 border-gray-800">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <i className="fas fa-history text-indigo-400 mr-2"></i>{" "}
                        Recent Files
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[180px]">
                        <div className="space-y-2">
                          {recentFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center p-2 rounded-md text-white hover:bg-gray-800 transition-colors cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded bg-indigo-900/30 flex items-center justify-center mr-3">
                                <i className="fas fa-file-excel text-indigo-400"></i>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {file.date} • {file.size}
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full cursor-pointer"
                              >
                                <i className="fas fa-arrow-right text-indigo-400"></i>
                              </Button>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
            {/* Right Panel - Data Preview & Visualization */}
            <div className="lg:col-span-2">
              {uploadedFile ? (
                <>
                  <Tabs defaultValue="data" className="w-full ">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger
                        value="data"
                        className="data-[state=active]:bg-indigo-600  cursor-pointer"
                      >
                        Data Preview
                      </TabsTrigger>
                      <TabsTrigger
                        value="visualization"
                        className="data-[state=active]:bg-indigo-600 cursor-pointer"
                      >
                        Visualization
                      </TabsTrigger>
                      <TabsTrigger
                        value="customize"
                        className="data-[state=active]:bg-indigo-600 cursor-pointer"
                      >
                        Customize
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="data" className="space-y-6">
                      <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className="text-white">Data Preview</span>
                            <Badge className="bg-indigo-900 text-indigo-300">
                              {mockExcelData.rows.length} rows
                            </Badge>
                          </CardTitle>
                          <CardDescription>
                            Preview of the first {mockExcelData.rows.length}{" "}
                            rows from your Excel file
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="rounded-md border border-gray-800 overflow-hidden">
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="bg-gray-800">
                                    {mockExcelData.headers.map(
                                      (header, index) => (
                                        <th
                                          key={index}
                                          className="text-left p-3 font-medium text-gray-300"
                                        >
                                          {header}
                                        </th>
                                      )
                                    )}
                                  </tr>
                                </thead>
                                <tbody>
                                  {mockExcelData.rows.map((row, rowIndex) => (
                                    <tr
                                      key={rowIndex}
                                      className="border-t border-gray-800 hover:bg-gray-800/50 transition-colors"
                                    >
                                      {row.map((cell, cellIndex) => (
                                        <td
                                          key={cellIndex}
                                          className="p-3 text-white"
                                        >
                                          {typeof cell === "number"
                                            ? cell.toLocaleString()
                                            : cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="flex justify-end">
                        <Button
                          id="continue-to-visualization-btn"
                          className="bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                          onClick={() => {
                            const button = document.getElementById(
                              "continue-to-visualization-btn"
                            );
                            if (button) {
                              button.classList.add("opacity-50");
                              button.innerHTML =
                                '<i class="fas fa-spinner fa-spin mr-2"></i> Loading...';
                            }
                            setTimeout(() => {
                              setActiveStep(Math.max(activeStep, 2));
                              const visualizationTab = document.querySelector(
                                '[value="visualization"]'
                              );
                              if (visualizationTab) {
                                visualizationTab.click();
                              }
                              setTimeout(() => {
                                if (button) {
                                  button.classList.remove("opacity-50");
                                  button.innerHTML =
                                    'Continue to Visualization <i class="fas fa-arrow-right ml-2"></i>';
                                }
                              }, 300);
                            }, 300);
                          }}
                        >
                          Continue to Visualization{" "}
                          <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="visualization" className="space-y-6">
                      <Card className="bg-gray-900 border-gray-800 text-white">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span>Select Chart Type</span>
                          </CardTitle>
                          <CardDescription>
                            Choose the best visualization for your data
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {chartTypes.map((chartType) => (
                              <div
                                key={chartType.id}
                                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                                  selectedChartType === chartType.id
                                    ? "border-indigo-500 bg-indigo-500/10"
                                    : "border-gray-800 hover:border-gray-700 hover:bg-gray-800/50"
                                }`}
                                onClick={() =>
                                  handleChartTypeChange(chartType.id)
                                }
                              >
                                <div className="flex flex-col items-center text-center">
                                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-2">
                                    <i
                                      className={`fas ${
                                        chartType.icon
                                      } text-xl ${
                                        selectedChartType === chartType.id
                                          ? "text-indigo-400"
                                          : "text-gray-400"
                                      }`}
                                    ></i>
                                  </div>
                                  <span className="text-sm font-medium">
                                    {chartType.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span className="text-white">Chart Preview</span>
                            <div className="flex items-center space-x-2">
                              <Badge className="bg-purple-900 text-purple-300">
                                {columnMapping.xAxis} vs {columnMapping.yAxis}
                              </Badge>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-gray-950 rounded-lg p-4 h-[400px]">
                            <div ref={chartRef} className="w-full h-full"></div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button
                            variant="outline"
                            className="border-gray-700 hover:bg-gray-800 hover:text-white !rounded-button whitespace-nowrap cursor-pointer"
                            onClick={() => {
                              setActiveStep(Math.max(activeStep, 3));
                              const customizeTab = document.querySelector(
                                '[value="customize"]'
                              );
                              if (customizeTab) {
                                customizeTab.click();
                              }
                            }}
                          >
                            <i className="fas fa-sliders-h mr-2"></i> Customize
                          </Button>
                          <div className="flex space-x-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="border-gray-700 text-white hover:bg-gray-800 cursor-pointer !rounded-button whitespace-nowrap"
                                  >
                                    <i className="fas fa-share-alt"></i>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Share Chart</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="border-gray-700 text-white hover:bg-gray-800 cursor-pointer !rounded-button whitespace-nowrap"
                                    onClick={handleExportChart}
                                  >
                                    <i className="fas fa-download"></i>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Export Chart</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <Button
                              className="bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                              onClick={() => {
                                setActiveStep(4);
                                const dialog = document.createElement("div");
                                dialog.className =
                                  "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200";
                                dialog.innerHTML = `
<div class="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-2xl p-6 shadow-2xl">
<div class="flex items-center justify-between mb-6">
<h3 class="text-xl font-semibold">Export & Share Chart</h3>
<button class="text-gray-400 hover:text-white" onclick="this.parentElement.parentElement.parentElement.remove()">
<i class="fas fa-times"></i>
</button>
</div>
<div class="grid grid-cols-2 gap-6">
<div class="space-y-4">
<div class="bg-gray-950 rounded-lg p-4 h-[300px] flex items-center justify-center">
<div id="preview-chart" class="w-full h-full"></div>
</div>
<div class="space-y-2 text-gray-400">
<label class="text-sm">Export Settings</label>
<div class="grid grid-cols-2 gap-2">
<div class="flex items-center space-x-2 p-2 rounded bg-gray-800">
<input type="radio" name="format" id="format-png" checked />
<label for="format-png">PNG</label>
</div>
<div class="flex items-center space-x-2 p-2 rounded bg-gray-800">
<input type="radio" name="format" id="format-jpg" />
<label for="format-jpg">JPG</label>
</div>
<div class="flex items-center space-x-2 p-2 rounded bg-gray-800">
<input type="radio" name="format" id="format-pdf" />
<label for="format-pdf">PDF</label>
</div>
<div class="flex items-center space-x-2 p-2 rounded bg-gray-800">
<input type="radio" name="format" id="format-svg" />
<label for="format-svg">SVG</label>
</div>
</div>
</div>
</div>
<div class="space-y-4">
<div class="p-4 rounded-lg text-gray-400 bg-gray-800 space-y-3">
<h4 class="font-medium">Quick Actions</h4>
<button class="w-full flex items-center justify-between p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors">
<span class="flex items-center text-gray-400">
<i class="fas fa-download mr-2"></i>
Export Chart
</span>
<i class="fas fa-arrow-right"></i>
</button>
<button class="w-full flex items-center justify-between p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors">
<span class="flex items-center text-gray-400">
<i class="fas fa-columns mr-2"></i>
Add to Dashboard
</span>
<i class="fas fa-arrow-right"></i>
</button>
<button class="w-full flex items-center justify-between p-3 rounded bg-gray-700 hover:bg-gray-600 transition-colors">
<span class="flex items-center text-gray-400">
<i class="fas fa-share-alt mr-2"></i>
Share Chart
</span>
<i class="fas fa-arrow-right"></i>
</button>
</div>
<div class="p-4 rounded-lg bg-gray-800 space-y-3">
<h4 class="font-medium text-gray-400">Share via</h4>
<div class="grid grid-cols-2 gap-2">
<button class="flex items-center justify-center p-2 rounded text-gray-400 bg-gray-700 hover:bg-gray-600 transition-colors">
<i class="fas fa-envelope mr-2"></i>
Email
</button>
<button class="flex items-center justify-center p-2 rounded text-gray-400 bg-gray-700 hover:bg-gray-600 transition-colors">
<i class="fas fa-link mr-2"></i>
Copy Link
</button>
</div>
</div>
<div class="p-4 rounded-lg bg-gray-800">
<div class="flex items-center justify-between mb-2">
<h4 class="font-medium text-gray-400">Export Quality</h4>
<span class="text-sm text-gray-400">High</span>
</div>
<input type="range" class="w-full" min="1" max="3" value="3" />
</div>
</div>
</div>
<div class="flex justify-end mt-6 space-x-3">
<button class="px-4 py-2 rounded text-gray-400 bg-gray-800 hover:bg-gray-700 transition-colors" onclick="this.parentElement.parentElement.parentElement.remove()">
Cancel
</button>
<button class="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 transition-colors">
Export Chart
</button>
</div>
</div>
`;
                                document.body.appendChild(dialog);
                                // Clone the chart into preview
                                if (chartInstance.current) {
                                  const previewChart = echarts.init(
                                    dialog.querySelector("#preview-chart")
                                  );
                                  previewChart.setOption(
                                    chartInstance.current.getOption()
                                  );
                                }
                              }}
                            >
                              Finalize Chart
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                    <TabsContent value="customize" className="space-y-6">
                      <Card className="text-white bg-gray-900 border-gray-800">
                        <CardHeader>
                          <CardTitle>Chart Customization</CardTitle>
                          <CardDescription>
                            Fine-tune your visualization
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="space-y-3">
                            <Label htmlFor="chart-title" className="text-white">
                              Chart Title
                            </Label>
                            <Input
                              id="chart-title"
                              value={chartOptions.title}
                              onChange={(e) =>
                                setChartOptions({
                                  ...chartOptions,
                                  title: e.target.value,
                                })
                              }
                              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="space-y-3">
                            <Label>Color Scheme</Label>
                            <div className="grid grid-cols-3 gap-3">
                              {colorSchemes.map((scheme) => (
                                <div
                                  key={scheme.id}
                                  className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                                    chartOptions.colorScheme === scheme.id
                                      ? "border-indigo-500"
                                      : "border-gray-800 hover:border-gray-700"
                                  }`}
                                  onClick={() =>
                                    setChartOptions({
                                      ...chartOptions,
                                      colorScheme: scheme.id,
                                    })
                                  }
                                >
                                  <div className="flex items-center space-x-2">
                                    <div
                                      className="w-6 h-6 rounded"
                                      style={{
                                        background: `linear-gradient(to right, ${scheme.primary}, ${scheme.secondary})`,
                                      }}
                                    ></div>
                                    <span className="text-sm">
                                      {scheme.name}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="show-legend">Show Legend</Label>
                                <Switch
                                  id="show-legend"
                                  checked={chartOptions.showLegend}
                                  onCheckedChange={(checked) =>
                                    setChartOptions({
                                      ...chartOptions,
                                      showLegend: checked,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="show-grid">Show Grid</Label>
                                <Switch
                                  id="show-grid"
                                  checked={chartOptions.showGrid}
                                  onCheckedChange={(checked) =>
                                    setChartOptions({
                                      ...chartOptions,
                                      showGrid: checked,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="enable-animation">
                                  Enable Animation
                                </Label>
                                <Switch
                                  id="enable-animation"
                                  checked={chartOptions.enableAnimation}
                                  onCheckedChange={(checked) =>
                                    setChartOptions({
                                      ...chartOptions,
                                      enableAnimation: checked,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="flex justify-end">
                        <Button
                          className="bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                          onClick={() => {
                            setActiveStep(Math.max(activeStep, 4));
                            const visualizationTab = document.querySelector(
                              '[value="visualization"]'
                            );
                            if (visualizationTab) {
                              visualizationTab.click();
                            }
                          }}
                        >
                          Apply Changes <i className="fas fa-check ml-2"></i>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-gray-900 rounded-xl border border-gray-800">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%2520data%2520visualization%2520concept%2520with%25203D%2520charts%2520and%2520graphs%2520floating%2520in%2520space%252C%2520dark%2520theme%2520with%2520purple%2520and%2520blue%2520glowing%2520elements%252C%2520abstract%2520digital%2520data%2520representation%2520with%2520particles%2520and%2520grid%2520lines%252C%2520futuristic%2520analytics%2520dashboard%2520concept&width=500&height=300&seq=empty-state&orientation=landscape"
                    alt="Data visualization concept"
                    className="w-64 h-auto mb-6 rounded-lg"
                  />
                  <h3 className="text-2xl font-bold mb-2">
                    Start by uploading an Excel file
                  </h3>
                  <p className="text-gray-400 mb-6 max-w-md">
                    Drag & drop your Excel file to the upload area or click to
                    browse files. We'll automatically analyze your data and
                    suggest the best visualizations.
                  </p>
                  <Button
                    id="select-excel-btn"
                    className="bg-indigo-600 hover:bg-indigo-700 !rounded-button whitespace-nowrap cursor-pointer"
                    onClick={() => {
                      if (fileInputRef.current) {
                        fileInputRef.current.click();
                      }
                    }}
                  >
                    <i className="fas fa-file-upload mr-2"></i> Select Excel
                    File
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Success Alert */}
      {showSuccessAlert && (
        <div className="fixed bottom-20 right-4 z-50 animate-in fade-in slide-in-from-right-10 duration-300">
          <Alert className="bg-green-900 border-green-700 text-white">
            <i className="fas fa-check-circle text-green-400 mr-2"></i>
            <AlertDescription>Chart exported successfully!</AlertDescription>
          </Alert>
        </div>
      )}

      {/* Footer */}
    </div>
    <Footer />
  </>
  );
};
export default DashboardPage;
