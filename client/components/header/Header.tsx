import * as React from 'react';
import * as logo from './png/logo.png';

require('./header.css');

export const Header: React.SFC<any> = (_props) => (
    <header className="header">
        <div className="navigation">
            <img src={logo} alt="Movavi logo" className="navigation__logo"/>
        </div>
    </header>
);
