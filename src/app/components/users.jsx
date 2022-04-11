import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagunation from "./pagunation";
import User from "./user";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import api from "../api";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setcurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [professions, setProfessions] = useState(api.professions.fetchAll());
    const handlePageChange = (pageIndex) => {
        setcurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    const handleProfessionsSelect = (params) => {
        console.log(params);
    };
    console.log(professions);

    return (
        <>
            <GroupList
                items={professions}
                jnItemSelect={handleProfessionsSelect}
            />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User {...rest} {...user} key={user._id} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagunation
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
