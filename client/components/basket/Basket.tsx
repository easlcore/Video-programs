import * as React from 'react';
import { IProduct } from 'interfaces/IProduct';
import * as _basket from './png/basket.png';

require('./basket.css');

interface IBasketProps {
    order: IProduct[];
    onCancelOrderProduct(id: string): void;
}

export class Basket extends React.Component<IBasketProps, any> {
    constructor(props: any) {
        super(props);

        this.calculateAmount = this.calculateAmount.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.calculateOrderItemsString = this.calculateOrderItemsString.bind(this);
    }

    public calculateAmount() {
        return this.props.order.reduce((acc, val) => (
                acc + val.price
        ), 0);
    }

    public placeOrder() {
        alert(`Вы добавили в корзину ${this.calculateOrderItemsString()} на сумму ${this.calculateAmount()} руб.`)
    }

    public calculateOrderItemsString() {
        return this.props.order.reduce((acc, val, index) => (
            acc + `${index === 0 ? ' ' : ', '}${val.name}`
        ), '')
    }

    public render() {
        return (
            <div className="orders-list">
                <div className="orders-list__header">
                    Корзина
                </div>
                {this.props.order.map(i => (
                    <div className="orders-item" key={i.id}>
                        <i
                            className="orders-item__icon"
                            onClick={this.props.onCancelOrderProduct.bind(null, i.id)}
                        />
                        <span className="orders-item__name">
                            {i.name}
                        </span>
                        <span className="orders-item__price">
                            {i.price}
                        </span>
                    </div>
                ))}
                <div className="orders-list__summary">
                    Всего: <span className="summary-amount">{this.calculateAmount()} руб.</span>
                </div>
                <button
                    disabled={!this.props.order.length}
                    className="orders-list__button"
                    onClick={this.placeOrder}
                >
                    Оформить заказ
                </button>
            </div>
        )
    }
}
