import { createContext } from 'react';

const defaultAppContext = {
    cartItemCount: "1",
    orderMode: "d"
}

export const AppContext = createContext(defaultAppContext);
