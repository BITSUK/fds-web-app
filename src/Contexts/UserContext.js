import { createContext } from 'react';

export const defaultUser = {
    uid: "Guest",
    name: "Guest",
    role: "default",
    isLoggedIn: false,
    train: "",
    station: "",
    jdate: "",
    restaurant: ""
}

export const UserContext = createContext(defaultUser);
