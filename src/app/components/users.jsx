import React, { useEffect, useState } from "react";
import { paginate } from "../utils/paginate";
import Pagunation from "./pagunation";
import User from "./user";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import SearchStatus from "./searchStatus";
import api from "../api";

const Users = ({ users: allUsers, ...rest }) => {
    const pageSize = 2;
    const [currentPage, setcurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const handlePageChange = (pageIndex) => {
        setcurrentPage(pageIndex);
    };
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setcurrentPage(1);
    }, [selectedProf]);

    const handleProfessionsSelect = (item) => {
        setSelectedProf(item);
    };

    const filtredUsers = selectedProf
        ? allUsers.filter(
            (user) =>
                JSON.stringify(user.profession) ===
                JSON.stringify(selectedProf)
        )
        : allUsers;

    const count = filtredUsers.length;

    const userCrop = paginate(filtredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionsSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
                <SearchStatus length={count} />
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
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
                <div className="d-flex justify-content-center">
                    <Pagunation
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
