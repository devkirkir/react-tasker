import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import { ThemeProvider } from "./providers/ThemeProvider";
import ErrorBoundary from "providers/ErrorBoundary";
import ReduxProvider from "providers/ReduxProvider";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      <ReduxProvider>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>,
);
