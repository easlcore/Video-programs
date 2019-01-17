import { IProduct } from "interfaces/IProduct";
import { v1 as uuid } from 'uuid';
import { ORDER_PRODUCT, REMOVE_PRODUCT_FROM_ORDER } from "./actionTypes";

export const orderProduct = (product: IProduct) => ({
    type: ORDER_PRODUCT,
    payload: {
        product,
        id: uuid()
    }
});

export const removeProductFromOrder = (id: string) => ({
    type: REMOVE_PRODUCT_FROM_ORDER,
    payload: id
});
