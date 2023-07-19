import * as React from 'react';
import { Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../../consts/MyName.ts';
import PageColorContext from '../../contexts/PageColorContext.ts';
import SetPageColorContext from '../../contexts/SetPageColorContext.ts';
import { isPageColor } from '../../types/PageColor.ts';

const PageNavColorPicker = React.lazy(() => import('./PageNavColorPicker.tsx'));

const DROPDOWN_WIDTH: number = 177;
const DROPDOWN_HEIGHT: number = 262;

const fallback: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: DROPDOWN_HEIGHT,
	width: DROPDOWN_WIDTH,
} as const;

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
					<React.Suspense
						fallback={
							<div style={fallback}>
								<Spinner
									animation="border"
									variant="primary"
								/>
							</div>
						}>
						<PageNavColorPicker />
					</React.Suspense>
				</NavDropdown>
			</Container>
		</Navbar>
	);
}
