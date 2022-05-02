import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";

const App = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path="/users/:userId?" exact component={Users} />
                <Route path="/login" component={Login}/>
                <Route path="/" component={Main}/>
                <Redirect to="/"/>
            </Switch>
        </>

    );
};

export default App;
