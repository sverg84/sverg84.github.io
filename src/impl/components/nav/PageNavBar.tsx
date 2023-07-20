import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../../consts/MyName.ts';
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
			<Container>
				<Navbar.Brand>{MyName}</Navbar.Brand>
				<PageNavColorPicker />
			</Container>
		</Navbar>
	);
}
