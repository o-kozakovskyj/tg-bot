import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const LoginContainer = ({ usersData }) => {

    const { toggleCurrentUser } = useContext(CurrentUserContext);

    return <div>
        {usersData.map(user => <div key={user.id}>
            <button onClick={(e) => toggleCurrentUser(user, e)} >{user.userName}</button>
        </div>)}
    </div>
}

export default LoginContainer;