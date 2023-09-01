import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';

import styles from '../../../../styles/body/personal/about/header.module.scss';
import PersonalAboutMeCardFooter from './PersonalAboutMeCardFooter';
import PersonalAboutMePhotoCarousel from './PersonalAboutMePhotoCarousel';

const HEADER_LABEL = 'Oh, Hello!';

export default function PersonalAboutMeCard(): React.JSX.Element {
	return (
		<Card>
			<Card.Header className={styles.header}>
				{HEADER_LABEL.split('').map(character => (
					<span key={character}>{character}</span>
				))}
			</Card.Header>
			<PersonalAboutMePhotoCarousel />
			<PersonalAboutMeCardFooter />
		</Card>
	);
}
