import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import ChangeUser from "./components/page/changeUsersPage";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/login/:type?" component={Login}/>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/users/:userId?/edit" component={ChangeUser} />
                <Redirect to="/"/>
            </Switch>
        </>

    );
};

export default App;
