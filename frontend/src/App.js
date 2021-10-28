import "./App.css";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import TablasCarreras from "./components/TablaCarreras/TablasCarreras";
import TablaUsuarios from "./components/TablaUsuarios/TablaUsuarios";
import Usuario from "./components/Usuario/Usuario";
import UsuarioDesempeño from "./components/UsuarioDesempeño/UsuarioDesempeño";
import UsuarioLogro from "./components/UsuarioLogro/UsuarioLogro";
import ContextProvider from "./components/Context/ContextProvider";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <Switch>
          <Route path="/modifyUser">
              <Usuario/>
            </Route>
            <Route path="/logros">
              <UsuarioLogro />
            </Route>
            <Route path="/agregar">
              <UsuarioDesempeño />
            </Route>
            <Route path="/tabla1">
              <TablaUsuarios />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/tabla2">
              <TablasCarreras />
            </Route>
            <Route path="/registro">
              <Register />
            </Route>
            <Route path="/:id">
              <Usuario />
            </Route>
            <Route path="/"><Home/></Route>
          </Switch>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
