import { RouterProvider } from "providers/RouterProvider";

import useTheme from "hooks/useTheme";

import "styles/index.css";

const App = () => {
  const { theme } = useTheme();

  return (
    <div id={"App"} className={`App ${theme}`} data-testid="app">
      <RouterProvider />
      <div id="modal"></div>
    </div>
  );
};

export default App;
