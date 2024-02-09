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
import JobSeekerNavWrapper from './JobSeekerNavWrapper.tsx';
import PageNavColorPicker from './PageNavColorPicker.tsx';
import PageNavLatestPushTimestamp from './PageNavLatestPushTimestamp.tsx';

export default function PageNavBar(): React.JSX.Element {
	const style = useBackgroundColorStyle();

	return (
		<Navbar
			data-testid="navbar"
			expand={false}
			sticky="top"
			style={style}>
			<Container className={classNames(pageStyles.page, navStyles.navbar)}>
				<Col>
					<Link
						className={navStyles.brand}
						data-testid="name-link"
						to="/">
						{MyName}
					</Link>
				</Col>
				<Col className={navStyles.pushTime}>
					<PageNavLatestPushTimestamp />
				</Col>
				<Col className={navStyles.rightContent}>
					<JobSeekerNavWrapper />
					<PageNavColorPicker />
				</Col>
			</Container>
		</Navbar>
	);
}
