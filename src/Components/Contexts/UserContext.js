import { createContext } from 'react';

const defaultUser0 = {
    uid: "Guest0",
    name: "User-Guest0"
}

export const UserContext = createContext(defaultUser0);