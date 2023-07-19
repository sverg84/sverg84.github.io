import * as React from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../consts/MyName';
import PageColorContext from '../contexts/PageColorContext';
import SetPageColorContext from '../contexts/SetPageColorContext';
import { isPageColor } from '../types/PageColor';

const PageNavColorPicker = React.lazy(() => import('./PageNavColorPicker.tsx') );

export default function PageNavBar(): React.JSX.Element {
	const color = React.useContext(PageColorContext);
	const setColor = React.useContext(SetPageColorContext);

	const onSelect = React.useCallback(
		(eventKey: string | null) => {
			if (isPageColor(eventKey)) {
				setColor(eventKey);
			}
		},
		[setColor],
	);

	return (
		<Navbar
			expand={false}
			sticky="top"
			style={{backgroundColor: color}}
			variant="dark">
			<Container>
				<Navbar.Brand>{MyName}</Navbar.Brand>
				<NavDropdown
					align="end"
					renderMenuOnMount={false}
					style={{color: 'white'}}
					title={<i className="fa-solid fa-palette" />}
					onSelect={onSelect}>
					<React.Suspense fallback={null}>
						<PageNavColorPicker />
					</React.Suspense>
				</NavDropdown>
			</Container>
		</Navbar>
	);
}
