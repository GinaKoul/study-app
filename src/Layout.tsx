import { Outlet } from "react-router-dom";
import "./Layout.css";
import colors from "./styles/color.module.css";

function App() {
  return (
    <>
      <header className={`${colors.bgPrimary}`}>Study App</header>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer>Gina Kouliaki</footer>
    </>
  );
}

export default App;
