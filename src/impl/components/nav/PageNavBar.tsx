import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JobSeekerNavItems from 'impl/consts/JobSeekerNavItems';
import MyName from 'impl/consts/MyName.ts';
import useBackgroundColorStyle from 'impl/hooks/useBackgroundColorStyle';
import navStyles from 'impl/styles/nav/navbar.module.scss';
import pageStyles from 'impl/styles/pageMargin.module.scss';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import PageNavColorPicker from './PageNavColorPicker';
import PageNavLatestPushTimestamp from './PageNavLatestPushTimestamp';

export default function PageNavBar(): React.JSX.Element {
	const style = useBackgroundColorStyle();

	const [lastUpdatedTime, setLastUpdatedTime] = React.useState<Date | null>(
		null,
	);

	React.useEffect(() => {
		const fetchTime = async () => {
			try {
				const response = await fetch(
					'https://3a15ktad20.execute-api.us-east-2.amazonaws.com/Production/',
				);
				const updateTime: string = await response.json();
				setLastUpdatedTime(new Date(updateTime));
			} catch (error) {
				console.warn(error);
			}
		};

		fetchTime();
	}, []);

	return (
		<Navbar
			data-testid="navbar"
			expand="lg"
			sticky="top"
			style={style}>
			<Container
				className={pageStyles.page}
				fluid={true}>
				<LinkContainer to="/">
					<Navbar.Brand
						className={navStyles.brand}
						data-testid="name-link">
						{MyName}
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle
					aria-controls="offcanvas"
					className={navStyles.toggle}>
					<FontAwesomeIcon icon={solid('bars')} />
				</Navbar.Toggle>
				<Navbar.Collapse
					className={navStyles.offcanvas}
					id="offcanvas">
					{lastUpdatedTime != null && (
						<PageNavLatestPushTimestamp lastUpdatedTime={lastUpdatedTime} />
					)}
					<Nav className={navStyles.nav}>
						{JobSeekerNavItems.map(({label, to}) => (
							<LinkContainer
								className={navStyles.link}
								key={to}
								style={{color: 'inherit'}}
								to={{hash: to}}>
								<Nav.Link>{label}</Nav.Link>
							</LinkContainer>
						))}
					</Nav>
					<PageNavColorPicker />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
