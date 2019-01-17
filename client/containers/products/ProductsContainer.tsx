import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from 'interfaces/IState';
import { ProductsList } from 'components/products-list/ProductsList';
import { IProduct } from 'interfaces/IProduct';
import { Basket } from 'components/basket/Basket';
import StickyBox from "react-sticky-box";
import { orderProduct, removeProductFromOrder } from '../../actions/order-actions';

interface IProductsContainerOwnProps {
    products: IProduct[];
}

class ProductsContainerFn extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);

        this.handleRemoveProductFromOrder = this.handleRemoveProductFromOrder.bind(this);
    }

    public handleRemoveProductFromOrder(id: string) {
        this.props.removeProductFromOrder(id);
    }

    public render() {
        return (
            <React.Fragment>
                <ProductsList
                    products={this.props.products}
                    onOrderProduct={this.props.orderProduct}
                />
                <StickyBox offsetTop={20} offsetBottom={20} >
                    <Basket
                        onCancelOrderProduct={this.handleRemoveProductFromOrder}
                        order={this.props.order}
                    />
                </StickyBox>
            </React.Fragment>
        );
    }
}

export const ProductsContainer = connect<any, any, IProductsContainerOwnProps, IState>(
    store => ({
        products: store.products,
        order: store.order
    }),
    {
        orderProduct,
        removeProductFromOrder
    }
)(ProductsContainerFn);
