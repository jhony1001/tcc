import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    const notify = () => toast("Wow so easy!");

    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </>
    );
  }
}

export default App;
