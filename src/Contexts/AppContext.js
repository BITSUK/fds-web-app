import { createContext } from 'react';

export const defaultAppContext = {
    cartItemCount: "0",
    orderMode: "d",
    orderFoodQuery: "-",
    orderFoodMode: "-",
    orderFoodDate: ""
}

export const AppContext = createContext(defaultAppContext);
