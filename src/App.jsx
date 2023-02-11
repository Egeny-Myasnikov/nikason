import { router } from "./router/Router";
import { RouterProvider } from "react-router-dom";
import "./scss/main.scss";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
