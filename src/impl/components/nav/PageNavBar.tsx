import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import MyName from '../../consts/MyName.ts';
import useBackgroundColorStyle from '../../hooks/useBackgroundColorStyle.ts';
import brandStyles from '../../styles/nav/brand.module.css';
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
				<Navbar.Brand>
					{
						<Link
							className={brandStyles.link}
							to="/2nd">
							{MyName}
						</Link>
					}
				</Navbar.Brand>
				<PageNavColorPicker />
			</Container>
		</Navbar>
	);
}
