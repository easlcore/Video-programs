import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProductsContainer } from '../../containers/products/ProductsContainer';

require('./content.css');

export const Content = () => (
    <div className="content">
        <Switch>
            <Route exact path="/" component={ProductsContainer} />
        </Switch>
    </div>
)
