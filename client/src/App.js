import React from "react";
import "./App.css";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";
import Home from "./views/home/Home";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar/Navbar";
import Registro from "./views/Register/registro";
import Carrito from "./components/Carrito/Carrito";
import SobreNosotros from "./views/about/SobreNosotros";




function App() {
  return (
    
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/create" component={Create} />
          <Route path="/registro" component={Registro} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/about" component={SobreNosotros} />
        </Switch>
      </div>
  );
}

export default App;


