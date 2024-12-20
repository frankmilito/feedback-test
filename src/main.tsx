import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiContextType, ApiProvider } from "./context/api-context.tsx";

export const RootApp = ({ apiKey }: ApiContextType) => {
  return (
    <ApiProvider apiKey={apiKey}>
      <App />
    </ApiProvider>
  );
};
createRoot(document.getElementById("root")!).render(<RootApp apiKey="test" />);
