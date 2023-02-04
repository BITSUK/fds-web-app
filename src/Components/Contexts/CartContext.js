import { createContext } from 'react';

export const emptyCart = {    
    totalPrice  : "0",
    discount    : "0",
    taxes       : "0",
    netprice    : "0",
    status      : "initial",
    items: [
        {
            item_id : "-",
            item_name : "-",
            item_price : "0",
            item_quantity : "0"
        },
        {
            item_id : "-",
            item_name : "-",
            item_price : "0",
            item_quantity : "0"
        },
        {
            item_id : "-",
            item_name : "-",
            item_price : "0",
            item_quantity : "0"
        }

    ]
}

export const CartContext = createContext(emptyCart);