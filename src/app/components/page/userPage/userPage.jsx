import React, { useState, useEffect } from "react";
import API from "../../../api";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import QualitiesList from "../../ui/qualities/qualitiesList";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        API.users.getById(id).then((user) => setUser(user));
    }, []);

    const handleEdit = (id) => {
        history.push(`${id}/edit`);
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities} />
                <p>completedMeetings {user.completedMeetings}</p>
                <h3>Rate{user.rate}</h3>
                <button onClick={handleEdit}>all users</button>
            </div>
        );
    } else {
        return "loading";
    }
};

UserPage.propTypes = {
    id: PropTypes.string
};

export default UserPage;
