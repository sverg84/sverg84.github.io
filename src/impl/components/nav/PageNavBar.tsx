import classNames from 'classnames';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import MyName from '../../consts/MyName.ts';
import useBackgroundColorStyle from '../../hooks/useBackgroundColorStyle.ts';
import navStyles from '../../styles/nav/navbar.module.scss';
import pageStyles from '../../styles/pageMargin.module.scss';
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
					<Link
						className={navStyles.brand}
						to="/">
						{MyName}
					</Link>
				</Col>
				<Col className={navStyles.rightContent}>
					{breadcrumbs}
					<PageNavColorPicker />
				</Col>
			</Container>
		</Navbar>
	);
}
