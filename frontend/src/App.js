import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import TablasCarreras from "./components/TablaCarreras/TablasCarreras";
import TablaUsuarios from "./components/TablaUsuarios/TablaUsuarios";
import Usuario from "./components/Usuario/Usuario";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/tabla1">
            <TablaUsuarios />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/usuario/:id">
            <Usuario />
          </Route>
          <Route path="/tabla2">
            <TablasCarreras />
          </Route>
          <Route path="/registro">
            <Register />
          </Route>
          <Route path="/">Hola</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
