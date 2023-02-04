import { createContext } from 'react';

export const defaultUser = {
    uid: "Guest",
    name: "Guest",
    role: "default",
    isLoggedIn: false,
    train: "",
    station: "",
    jdate: ""
}

export const UserContext = createContext(defaultUser);
