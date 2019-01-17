import { IProduct } from "interfaces/IProduct";
import { ORDER_PRODUCT, REMOVE_PRODUCT_FROM_ORDER } from "../actions/actionTypes";

export const orderReducer = (state: IProduct[] = [], action: any) => {
    switch (action.type) {
        case ORDER_PRODUCT:
            return [
                ...state,
                {
                    ...action.payload.product,
                    id: action.payload.id
                }
            ];
        case REMOVE_PRODUCT_FROM_ORDER:
            return state.filter(i => i.id !== action.payload);
        default:
            return state;
    }
}
