import { createContext } from 'react';

const defaultAppContext = {
    selectedOption: ""
}

export const AppContext = createContext(defaultAppContext);
