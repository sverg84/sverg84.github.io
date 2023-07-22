import * as React from 'react';
import Card from 'react-bootstrap/Card';

import PageColorContext from '../../../contexts/PageColorContext';
import ExperienceCarousel from './ExperienceCarousel';

const header: React.CSSProperties = {
	marginBottom: 0,
	textAlign: 'center',
} as const;

export default function ExperienceCard(): React.JSX.Element {
	const color = React.useContext(PageColorContext);

	return (
		<Card>
			<Card.Header>
				<h2 style={{...header, color}}>Experience</h2>
			</Card.Header>
			<Card.Body>
				<ExperienceCarousel />
			</Card.Body>
		</Card>
	);
}
