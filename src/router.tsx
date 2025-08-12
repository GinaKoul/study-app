import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import Units from "./pages/Units.tsx";
import FlashCards from "./pages/FlashCards.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "units", element: <Units /> },
      { path: "flashcards", element: <FlashCards /> },
    ],
  },
]);

export default router;
