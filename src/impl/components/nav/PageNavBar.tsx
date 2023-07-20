import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../../consts/MyName.ts';
import PageMarginStyle from '../../consts/PageMarginStyle.ts';
import PageColorContext from '../../contexts/PageColorContext.ts';
import PageNavColorPicker from './PageNavColorPicker.tsx';

export default function PageNavBar(): React.JSX.Element {
	const color = React.useContext(PageColorContext);

	return (
		<Navbar
			expand={false}
			sticky="top"
			style={{backgroundColor: color}}
			variant="dark">
			<Container style={PageMarginStyle}>
				<Navbar.Brand>{MyName}</Navbar.Brand>
				<PageNavColorPicker />
			</Container>
		</Navbar>
	);
}
