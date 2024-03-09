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
import ProductsByCategory from "./components/ProductsByCategory/ProductsByCategory";
import axios from "axios";
axios.defaults.baseURL= "http://localhost:3001"


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
          <Route path="/shop" component={ProductsByCategory} />
        </Switch>
      </div>
  );
}

export default App;


