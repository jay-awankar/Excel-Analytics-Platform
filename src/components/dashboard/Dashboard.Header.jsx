import React from "react";

const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2">
        <a
          href="/HomePage"
          data-readdy="true"
          className="text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Home
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-2">Create Your Visualization</h1>
      <p className="text-gray-400">
        Upload your Excel file and create stunning visualizations in minutes
      </p>
    </div>
  );
};

export default DashboardHeader;
