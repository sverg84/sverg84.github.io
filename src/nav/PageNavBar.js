import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../consts/MyName';
import PageColorContext from '../contexts/PageColorContext';
import SetPageColorContext from '../contexts/SetPageColorContext';
import { isPageColor } from '../types/PageColor';
import PageNavColorPicker from './PageNavColorPicker';
export default function PageNavBar() {
    const color = React.useContext(PageColorContext);
    const setColor = React.useContext(SetPageColorContext);
    const onSelect = React.useCallback((eventKey) => {
        if (isPageColor(eventKey)) {
            setColor(eventKey);
        }
    }, [setColor]);
    return (React.createElement(Navbar, { expand: false, sticky: "top", style: { backgroundColor: color }, variant: 'dark' },
        React.createElement(Container, null,
            React.createElement(Navbar.Brand, null, MyName),
            React.createElement(NavDropdown, { align: "end", renderMenuOnMount: false, style: { color: 'white' }, title: React.createElement("i", { className: "fa-solid fa-palette" }), onSelect: onSelect },
                React.createElement(PageNavColorPicker, null)))));
}
