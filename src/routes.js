import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import visualizar from "./visualizar";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { visualizar }  path="/visualizar"/>
       </BrowserRouter>
   )
}
export default Routes;
