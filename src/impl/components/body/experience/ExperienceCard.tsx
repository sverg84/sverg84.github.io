import classNames from 'classnames';
import * as React from 'react';
import Card from 'react-bootstrap/Card';

import useColorStyle from '../../../hooks/useColorStyle';
import styles from '../../../styles/body/experience/card.module.css';
import ExperienceCarousel from './ExperienceCarousel';

export default function ExperienceCard(): React.JSX.Element {
	const color = useColorStyle();

	return (
		<Card>
			<Card.Header
				as="h2"
				className={classNames(styles.header, color)}>
				Experience
			</Card.Header>
			<Card.Body>
				<ExperienceCarousel />
			</Card.Body>
		</Card>
	);
}
