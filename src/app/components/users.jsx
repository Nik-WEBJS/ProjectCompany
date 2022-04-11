import React, { useState } from "react";
import { paginate } from "../utils/paginate"
import Pagunation from "./pagunation";
import User from "./user";


const Users = ({ users, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setcurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setcurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);

  return (
    <>
      {users.length > 0 && (
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

export default Users;
