import "./App.css";
import InsightsDashboard from "./components/Insights/InsightsDashboard";
import Orders from "./components/orders/Orders";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ContextProvider from "./context/appContext";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <InsightsDashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
