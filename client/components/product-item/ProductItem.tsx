import * as React from 'react';
import { IProduct } from 'interfaces/IProduct';
import { images } from './png';

require('./product-item.css');

interface IProductItemProps {
    product: IProduct;
    handleOrderProduct(product: IProduct): void;
}

export class ProductItem extends React.Component<IProductItemProps, any> {
    constructor(props: any) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(item: IProduct) {
        this.props.handleOrderProduct(item);
    }

    public render() {
        return (
            <div className="product">
                <img src={images[this.props.product.value]} alt="product image"/>
                <div className="product-info">
                    <h1 className="product-info__title">
                        {this.props.product.name}
                    </h1>
                    <p className="product-info__description">
                        {this.props.product.description}
                    </p>
                </div>
                <div className="product-price">
                    <span className="product-price__amount">
                        {this.props.product.price} руб.
                    </span>
                    <button
                        className="product-price__button"
                        onClick={this.handleClick.bind(null, this.props.product)}
                    >
                        В корзину!
                    </button>
                </div>
            </div>
        )
    }
}
