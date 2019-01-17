import * as React from 'react';
import { IProduct } from 'interfaces/IProduct';
import { ProductItem } from 'components/product-item/ProductItem';

require('./products-list.css');

interface IProductsListProps {
    products: IProduct[];
    onOrderProduct(product: IProduct): void;
}

export class ProductsList extends React.Component<IProductsListProps, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="products-list">
                {this.props.products.map((item) => (
                    <ProductItem
                        handleOrderProduct={this.props.onOrderProduct}
                        key={item.value}
                        product={item}
                    />
                ))}
            </div>
        );
    }
}
