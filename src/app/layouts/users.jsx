import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/userPage";
import UsersList from "../components/userList";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <h1>{userId ? <UserPage userId={userId} /> : <UsersList />}</h1>
        </>
    );
};

export default Users;
