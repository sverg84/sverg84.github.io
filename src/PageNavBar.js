import * as React from 'react';
import Container from 'react-bootstrap/Container';
import MyName from './consts/MyName';
import Navbar from 'react-bootstrap/Navbar';
import PageColorContext from './contexts/PageColorContext';
export default function PageNavBar() {
    const color = React.useContext(PageColorContext);
    return (React.createElement(Navbar, { variant: color === 'black' ? 'dark' : 'light', style: { backgroundColor: color } },
        React.createElement(Container, null,
            React.createElement(Navbar.Brand, null, MyName))));
}
