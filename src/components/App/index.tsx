import { RouterProvider } from "providers/RouterProvider";

import useTheme from "hooks/useTheme";

import "styles/index.css";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`} data-testid="app">
      <RouterProvider />
    </div>
  );
};

export default App;
