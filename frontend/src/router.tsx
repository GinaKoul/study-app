import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./pages/Home.js";
import Units from "./pages/Units.js";
import FlashCards from "./pages/FlashCards.js";
import Login from "./pages/Login.js";
import ErrorPage from "./pages/ErrorPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "units", element: <Units /> },
      { path: "flashcards", element: <FlashCards /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
