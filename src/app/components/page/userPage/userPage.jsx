import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../../api";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    const handleClick = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>completedMeetings {user.completedMeetings}</p>
                <h3>Rate{user.rate}</h3>
                <button onClick={handleClick}>all users</button>
            </div>
        );
    } else {
        return <span>Loading</span>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
