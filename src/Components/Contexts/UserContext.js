import { createContext } from 'react';

const defaultUser0 = {
    uid: "Guest",
    name: "Guest",
    isLoggedIn: false
}

export const UserContext = createContext(defaultUser0);
