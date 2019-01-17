import { IProduct } from "interfaces/IProduct";

export const productsReducer = (state: IProduct[] = [], action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}
