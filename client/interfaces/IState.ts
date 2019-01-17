import { IProduct } from 'interfaces/IProduct';

export interface IState {
    products: IProduct[];
    order: IProduct[];
}
