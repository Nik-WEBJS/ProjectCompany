import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import UsersList from "./components/usersList";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path="/users/:userId?" exact component={UsersList} />
                <Route path="/login" component={Login}/>
                <Route path="/" component={Main}/>
                <Redirect to="/"/>
            </Switch>
        </>

    );
}

export default App;
