import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Units from "./pages/Units.js";
import Flashcards from "./pages/FlashCards.js";
import ErrorPage from "./pages/ErrorPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "units",
    element: <Units />,
  },
  {
    path: "flashcards",
    element: <Flashcards />,
  },
]);

export default router;
