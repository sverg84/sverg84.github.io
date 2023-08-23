import classNames from 'classnames';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Navbar from 'react-bootstrap/Navbar';

import MyName from '../../consts/MyName.ts';
import useBackgroundColorStyle from '../../hooks/useBackgroundColorStyle.ts';
import navStyles from '../../styles/nav/navbar.module.css';
import pageStyles from '../../styles/pageMargin.module.css';
import PageNavColorPicker from './PageNavColorPicker.tsx';

type Props = Readonly<{
	breadcrumbs?: React.JSX.Element | undefined;
}>;

export default function PageNavBar({breadcrumbs}: Props): React.JSX.Element {
	const className = useBackgroundColorStyle();

	return (
		<Navbar
			className={className}
			expand={false}
			sticky="top"
			variant="dark">
			<Container className={classNames(pageStyles.page, navStyles.navbar)}>
				<Col>
					<Navbar.Brand
						className={navStyles.brand}
						href="/">
						{MyName}
					</Navbar.Brand>
				</Col>
				<Col className={navStyles.rightContent}>
					{breadcrumbs}
					<PageNavColorPicker />
				</Col>
			</Container>
		</Navbar>
	);
}