/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom";
import { RootApp } from "./main";

export interface RenderAppOptions {
  apiKey: string; // Required API key
  containerId: string; // ID of the HTML element to render into
}

/**
 * Renders the Feedback widget into a specified DOM container.
 *
 * @param options.apiKey
 * @param options.containerId
 */
export function renderFeedbackApp({ apiKey, containerId }: RenderAppOptions) {
  if (!apiKey) {
    console.error("API key is required to use Feedback App.");
    return;
  }

  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  ReactDOM.render(<RootApp apiKey={apiKey} />, container);
}

export { RootApp };
