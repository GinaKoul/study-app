import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Units from "./pages/Units.tsx";
import Flashcards from "./pages/FlashCards.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "units/:title",
    element: <Units />,
  },
  {
    path: "flashcards/:title",
    element: <Flashcards />,
  },
]);

export default routes;
