import User from "./User/User";

const UsersContainer = ({ usersData }) => {

    return <div>
        <div>
            <h2>Users</h2>
            <button>Add user</button>
        </div>
        <div>
            {usersData.map(usersData => <User usersData={usersData} key={usersData.id} />)}
        </div>
    </div>
}

export default UsersContainer;