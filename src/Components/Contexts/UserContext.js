import { createContext } from 'react';

const defaultUser0 = {
    uid: "Guest",
    name: "Guest",
    role: "default",
    isLoggedIn: false
}

export const UserContext = createContext(defaultUser0);
