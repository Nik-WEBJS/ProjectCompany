import React, { useEffect, useState } from "react";
import { paginate } from "../../../utils/paginate";
import Pagunation from "../../common/pagunation";
import GroupList from "../../common/groupList";
import PropTypes from "prop-types";
import SearchStatus from "../../ui/searchStatus";
import API from "../../../api";
import UsersTable from "../../ui/usersTable";
import _ from "lodash";

const UsersListPage = () => {
    const pageSize = 4;
    const [currentPage, setcurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();

    const [placeholderUser, setplaceholderUser] = useState("");

    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setcurrentPage(1);
    }, [selectedProf]);

    const handleProfessionsSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setcurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const handleplaceholderUser = ({ target }) => {
        setplaceholderUser(target.value);
    };

    if (users) {
        const filtredUsers = placeholderUser
            ? users.filter(
                (user) =>
                    user.name
                        .toLowerCase()
                        .indexOf(placeholderUser.toLowerCase()) !== -1
            )
            : selectedProf
                ? users.filter(
                    (user) =>
                        JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
                )
                : users;

        const count = filtredUsers.length;
        const sortedUsers = _.orderBy(
            filtredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const userCrop = paginate(sortedUsers, currentPage, pageSize);
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
                    <input
                        type="text"
                        name="placeholderUser"
                        placeholder="Search..."
                        onChange={handleplaceholderUser}
                    />
                    {count > 0 && (
                        <UsersTable
                            users={userCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
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
    }
    return "loading";
};

UsersListPage.propTypes = {
    users: PropTypes.array
};

export default UsersListPage;
