import React, { useState } from "react";

function FileUpload({ onSummary, onCleanedFile, onErrorLogFile }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a CSV file to upload.");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/clean", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      onSummary(data);
      onCleanedFile(data.cleaned_file);
      onErrorLogFile(data.error_log);
    } catch (err) {
      console.error(err);
      alert("Failed to upload and clean the data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 max-w-md mx-auto rounded-lg shadow">
      <input
        type="file"
        accept=".csv"
        className="block w-full text-sm mb-4"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition disabled:opacity-50"
      >
        {loading ? "Cleaning..." : "Upload & Clean"}
      </button>
    </div>
  );
}

export default FileUpload;
