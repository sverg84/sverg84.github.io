import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';

import PersonalAboutMeCardFooter from './PersonalAboutMeCardFooter';
import PersonalAboutMePhotoCarousel from './PersonalAboutMePhotoCarousel';

export default function PersonalAboutMeCard(): React.JSX.Element {
	return (
		<Card>
			<PersonalAboutMePhotoCarousel />
			<PersonalAboutMeCardFooter />
		</Card>
	);
}
