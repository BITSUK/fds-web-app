import { createContext } from 'react';

export const defaultUser = {
    uid: "Guest",
    name: "Guest",
    role: "default",
    isLoggedIn: false
}

export const UserContext = createContext(defaultUser);
