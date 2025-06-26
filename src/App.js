import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import DataPreview from "./components/DataPreview";

function App() {
  const [summary, setSummary] = useState(null);
  const [cleanedFile, setCleanedFile] = useState(null);
  const [errorLogFile, setErrorLogFile] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        🌤️ Weather Data Cleaner
      </h1>

      <FileUpload
        onSummary={setSummary}
        onCleanedFile={setCleanedFile}
        onErrorLogFile={setErrorLogFile}
      />

      {summary && <DataPreview summary={summary} />}

      {cleanedFile && (
        <div className="text-center mt-6">
          <a
            href={`http://localhost:8000/api/download?path=${encodeURIComponent(
              cleanedFile
            )}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-700"
            download
          >
            📥 Download Cleaned Data
          </a>
          <a
            href={`http://localhost:8000/api/download?path=${encodeURIComponent(
              errorLogFile
            )}`}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            download
          >
            🪵 Download Error Log
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
