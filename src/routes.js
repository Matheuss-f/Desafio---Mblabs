import React from "react";
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Login from './containers/login'
import Feed from './containers/feed'
import Compra from './containers/compra'
import Agradecimento from './containers/agradecimento'

function Routes(){
  return(
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/feed" component= {Feed} />
      <Route exact path="/compra" component= {Compra} />
      <Route exact path="/agradecimento" component= {Agradecimento} />
    </Router>
  )
}

export default Routes  