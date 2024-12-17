import "./index.css";
import SurveyApp from "./App";
import { createRoot } from "react-dom/client";

export function mountSurveyApp(elementId: string) {
  const rootElement = document.getElementById(elementId);
  if (!rootElement) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }
  createRoot(rootElement).render(<SurveyApp />);
}

mountSurveyApp("root");
