import { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ( {children} ) => {
    const [currentUser, setCurrentUser] = useState(null);

    const toggleCurrentUser = (user) => {
        setCurrentUser(user);
    }

    return <CurrentUserContext.Provider value = {{currentUser, toggleCurrentUser}}>
        {children}
    </CurrentUserContext.Provider>
}