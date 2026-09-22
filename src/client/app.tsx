import React, { useState, useRef, useCallback } from "react";
import { Button } from "@servicenow/react-components/Button";
import { Card } from "@servicenow/react-components/Card";
import { CardHeader } from "@servicenow/react-components/CardHeader";
import "./app.css";

interface ImportResult {
  success: boolean;
  quizId: string;
  counts: {
    quizzes: number;
    rounds: number;
    questions: number;
    categories: number;
    audiences: number;
    quizRounds: number;
    roundQuestions: number;
  };
  errors: string[];
}

interface ApiResponse {
  result: ImportResult;
}

export default function App() {
  const [jsonContent, setJsonContent] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
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
      setResult(data.result);
    } catch (err: any) {
      setResult({
        success: false,
        quizId: "",
        counts: {
          quizzes: 0,
          rounds: 0,
          questions: 0,
          categories: 0,
          audiences: 0,
          quizRounds: 0,
          roundQuestions: 0,
        },
        errors: [err.message || "Network error occurred"],
      });
    } finally {
      setImporting(false);
    }
  }, [jsonContent]);

  const handleCancel = useCallback(() => {
    setJsonContent(null);
    setFileName(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  return (
    <div className="quiz-import-page">
      <h1 className="quiz-import-header">Import Quiz</h1>
      <p className="quiz-import-description">
        Select a JSON file containing quiz data to import into the Quiz App.
        Preview the contents before importing.
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        className="quiz-import-file-input"
        onChange={handleFileChange}
      />

      {!jsonContent && (
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

      {jsonContent && (
        <div className="quiz-import-preview-card">
          <Card size="md">
            <CardHeader tagline={{ label: "File Preview" }} heading={{ label: fileName || "Selected File", level: 3 }} />
            <pre className="quiz-import-json-preview">{jsonContent}</pre>
            <div className="quiz-import-actions">
              <Button
                label={importing ? "Importing..." : "Import Quiz"}
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
          Importing quiz data, please wait...
        </div>
      )}

      {result && result.success && (
        <div className="quiz-import-result quiz-import-result--positive">
          <p className="quiz-import-result-title">
            Quiz imported successfully!
          </p>
          <ul className="quiz-import-counts">
            <li>
              <strong>{result.counts.quizzes}</strong> quiz
            </li>
            <li>
              <strong>{result.counts.rounds}</strong> rounds
            </li>
            <li>
              <strong>{result.counts.questions}</strong> questions
            </li>
            <li>
              <strong>{result.counts.categories}</strong> categories
            </li>
            <li>
              <strong>{result.counts.audiences}</strong> audiences
            </li>
          </ul>
        </div>
      )}

      {result && !result.success && (
        <div className="quiz-import-result quiz-import-result--critical">
          <p className="quiz-import-result-title">Import failed</p>
          {result.errors.map((error, idx) => (
            <p key={idx} className="quiz-import-result-text">
              {error}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
