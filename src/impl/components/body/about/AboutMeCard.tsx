import * as React from 'react';
import Card from 'react-bootstrap/Card';

import AboutMeCardBody from './AboutMeCardBody';
import AboutMeCardFooter from './AboutMeCardFooter';


export default function AboutMeCard(): React.JSX.Element {
	return (
		<Card>
			<AboutMeCardBody />
			<AboutMeCardFooter />
		</Card>
	);
}
