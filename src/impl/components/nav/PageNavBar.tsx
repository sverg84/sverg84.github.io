import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../../consts/MyName.ts';
import useBackgroundColorStyle from '../../hooks/useBackgroundColorStyle.ts';
import pageStyles from '../../styles/pageMargin.module.css';
import PageNavColorPicker from './PageNavColorPicker.tsx';

export default function PageNavBar(): React.JSX.Element {
	const className = useBackgroundColorStyle();

	return (
		<Navbar
			className={className}
			expand={false}
			sticky="top"
			variant="dark">
			<Container className={pageStyles.page}>
				<Navbar.Brand>{MyName}</Navbar.Brand>
				<PageNavColorPicker />
			</Container>
		</Navbar>
	);
}
