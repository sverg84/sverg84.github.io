import * as React from 'react';

import Container from 'react-bootstrap/Container';
import MyName from './consts/MyName';
import Navbar from 'react-bootstrap/Navbar';
import PageColorContext from './contexts/PageColorContext';

export default function PageNavBar(): React.JSX.Element {
    const color = React.useContext(PageColorContext);

    return (
        <Navbar variant={color === 'black' ? 'dark' : 'light'} style={{backgroundColor: color}}>
            <Container>
                <Navbar.Brand>{MyName}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}