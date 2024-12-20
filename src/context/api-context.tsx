import { createContext, ReactNode, useContext } from "react";

export type ApiContextType = {
  apiKey: string;
};
const ApiContext = createContext<ApiContextType | null>(null);

export const ApiProvider = ({
  apiKey,
  children,
}: ApiContextType & { children: ReactNode }) => {
  console.log(`Heres is your api key ${apiKey}`);
  if (!apiKey) {
    console.error("API key is required to use Feedback App.");
    return;
  }
  return (
    <ApiContext.Provider value={{ apiKey }}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi must be used within ApiProvider");
  }
  return context;
};
