import "./index.css";
import App from "./App.tsx";
import { ApiContextType, ApiProvider } from "./context/api-context.tsx";
import { version } from "../package.json";

export const RootApp = ({ apiKey }: ApiContextType) => {
  console.log(version);
  return (
    <ApiProvider apiKey={apiKey}>
      <App />
    </ApiProvider>
  );
};
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <RootApp apiKey="test" />
// );
