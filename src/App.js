import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";


class App extends React.Component{

    render(){

        return(


        <BrowserRouter>
            <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            
          </Switch>
        </BrowserRouter>
        )
    }
}

export default App;