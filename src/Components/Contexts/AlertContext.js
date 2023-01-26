import { createContext } from 'react';

const defaultMessage0 = {
    alertMessage: "",
    alertType: "default",
}

export const AlertContext = createContext(defaultMessage0);

//https://getbootstrap.com/docs/4.0/components/alerts/