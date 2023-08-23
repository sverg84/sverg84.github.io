import * as React from 'react';
import Card from 'react-bootstrap/Card';

import AboutMeCardBody from './AboutMeCardBody';
import AboutMeCardFooter from './AboutMeCardFooter';

export default function AboutMeCard(): React.JSX.Element {
	return (
		<Card id="about">
			<AboutMeCardBody />
			<AboutMeCardFooter />
		</Card>
	);
}
