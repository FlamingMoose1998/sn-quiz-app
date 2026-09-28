import React, { useState, useRef, useCallback } from "react";
import { Button } from "@servicenow/react-components/Button";
import { Card } from "@servicenow/react-components/Card";
import { CardHeader } from "@servicenow/react-components/CardHeader";
import "./app.css";

interface StoreResult {
  success: boolean;
  rawJsonId: string;
  name: string;
}

interface ApiResponse {
  result: StoreResult;
}

export default function App() {
  const [jsonContent, setJsonContent] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<StoreResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setFileName(file.name);
      setResult(null);
      setError(null);
      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target?.result as string;
        try {
          const parsed = JSON.parse(text);
          setJsonContent(JSON.stringify(parsed, null, 2));
        } catch {
          setJsonContent(text);
        }
      };
      reader.readAsText(file);
    },
    []
  );

  const handleImport = useCallback(async () => {
    if (!jsonContent) return;
    setImporting(true);
    setResult(null);
    setError(null);
    try {
      const response = await fetch(
        "/api/x_0221_quiz_app/quiz_import/import",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-UserToken": (window as any).g_ck,
          },
          body: jsonContent,
        }
      );
      const data: ApiResponse = await response.json();
      if (data.result.success) {
        setResult(data.result);
      } else {
        setError("Failed to store JSON. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "Network error occurred");
    } finally {
      setImporting(false);
    }
  }, [jsonContent]);

  const handleCancel = useCallback(() => {
    setJsonContent(null);
    setFileName(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  return (
    <div className="quiz-import-page">
      <h1 className="quiz-import-header">Import Quiz</h1>
      <p className="quiz-import-description">
        Select a JSON file containing quiz data. The JSON will be stored for
        review, then you can process it into quiz records from the Raw JSON
        record.
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        className="quiz-import-file-input"
        onChange={handleFileChange}
      />

      {!jsonContent && !result && (
        <div className="quiz-import-upload-area">
          <p className="quiz-import-upload-text">
            Choose a JSON file to preview and import
          </p>
          <Button
            label="Browse for File"
            variant="primary"
            size="md"
            onClicked={handleBrowseClick}
          />
        </div>
      )}

      {jsonContent && !result && (
        <div className="quiz-import-preview-card">
          <Card size="md">
            <CardHeader tagline={{ label: "File Preview" }} heading={{ label: fileName || "Selected File", level: 3 }} />
            <pre className="quiz-import-json-preview">{jsonContent}</pre>
            <div className="quiz-import-actions">
              <Button
                label={importing ? "Storing..." : "Import Quiz"}
                variant="primary"
                size="md"
                disabled={importing}
                onClicked={handleImport}
              />
              <Button
                label="Cancel"
                variant="secondary"
                size="md"
                disabled={importing}
                onClicked={handleCancel}
              />
            </div>
          </Card>
        </div>
      )}

      {importing && (
        <div className="quiz-import-loading">
          Storing quiz JSON, please wait...
        </div>
      )}

      {result && result.success && (
        <div className="quiz-import-result quiz-import-result--positive">
          <p className="quiz-import-result-title">
            JSON stored successfully!
          </p>
          <p className="quiz-import-result-text">
            Quiz &quot;{result.name}&quot; has been saved. Open the Raw JSON
            record to process it into quiz records.
          </p>
          <p className="quiz-import-result-text">
            <a href={`/x_0221_quiz_app_raw_json.do?sys_id=${result.rawJsonId}`}>
              Open Raw JSON record
            </a>
          </p>
          <div className="quiz-import-actions">
            <Button
              label="Import Another"
              variant="secondary"
              size="md"
              onClicked={handleCancel}
            />
          </div>
        </div>
      )}

      {error && (
        <div className="quiz-import-result quiz-import-result--critical">
          <p className="quiz-import-result-title">Import failed</p>
          <p className="quiz-import-result-text">{error}</p>
        </div>
      )}
    </div>
  );
}
