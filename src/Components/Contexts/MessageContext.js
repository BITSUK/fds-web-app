import { createContext } from 'react';

const defaultMessage = {
    alertMessage: "",
    alertType: "alert-light",
}

export const MessageContext = createContext(defaultMessage);

// Currently this MessageContext is not in use, coding pending.
// Idea is to use this to dynamically show messages in right-pane (the Blank.js)