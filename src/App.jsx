import "./App.css";
import InsightsDashboard from "./components/Insights/InsightsDashboard";
import Orders from "./components/orders/Orders";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

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
  return <RouterProvider router={router} />;
}

export default App;
