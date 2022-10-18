import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cabecalho from "./components/layout/Cabecalho";

import Home from "./pages/Home";
import Rodape from "./components/layout/Rodape";
import ClassicRock from "./pages/ClassicRock";
import HeavyMetal from "./pages/HeavyMetal";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <main className="borda-main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>

          <Route path="/classicrock">
            <ClassicRock />
          </Route>

          <Route path="/heavymetal">
            <HeavyMetal />
          </Route>
        </main>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
