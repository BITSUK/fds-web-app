import { createContext } from 'react';

export const defaultUser = {
    uid: "Guest",
    name: "Guest",
    role: "default",
    isLoggedIn: false,
    train: "",
    trainName : "",
    station: "",
    stationName: "",
    jdate: "",
    restaurant: "",
    restaurantName : ""
}

export const UserContext = createContext(defaultUser);
