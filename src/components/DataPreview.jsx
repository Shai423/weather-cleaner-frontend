import React from "react";

function DataPreview({ summary }) {
  return (
    <div className="bg-white mt-8 p-6 max-w-md mx-auto rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        🧼 Cleaning Summary
      </h2>
      <ul className="text-gray-600 space-y-2">
        <li>Total Records: <strong>{summary.total_records}</strong></li>
        <li>Invalid Records: <strong>{summary.invalid_records}</strong></li>
        <li>Anomalies Detected: <strong>{summary.anomalies}</strong></li>
      </ul>
    </div>
  );
}

export default DataPreview;
