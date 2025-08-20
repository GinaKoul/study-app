import { Outlet } from "react-router-dom";
import "./Layout.css";
import colors from "./styles/color.module.css";
import ButtonLink from "./components/Button/ButtonLink.js";

function App() {
  return (
    <>
      <header className={`${colors.bgSecondary}`}>
        <div className="container hd-inner">
          <h1>Study App</h1>
          <ButtonLink linkTo="/login" label="Log In" />
        </div>
      </header>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer>Gina Kouliaki</footer>
    </>
  );
}

export default App;
