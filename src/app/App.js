import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import Users from "./components/users";
import NotFound from "./components/not-found";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/users" exact component={Users}/>
                <Route path="/404" component={NotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </div>

    );
}

export default App;
