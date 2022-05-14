import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/userListPage";
import EditUser from "../components/page/changeUsersPage";
const Users = () => {
    const params = useParams();
    const { id, edit } = params;

    return (
        <>
            {id ? (
                edit ? (
                    <EditUser />
                ) : (
                    <UserPage id={id} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};

export default Users;
