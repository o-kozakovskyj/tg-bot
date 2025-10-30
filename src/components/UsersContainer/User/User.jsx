const User = ({ usersData }) => {
    return <div>
        <div>
            {/* <img src="" alt="" /> */}
            <h3>{usersData.userName}</h3>
            <button>{usersData.role}</button>
        </div>
        <div>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
}

export default User;