import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';

import AboutMeCardBodyContainer from '../../body/about/AboutMeCardBodyContainer';

type Props = Readonly<{
	src: string;
}>;

export default function PersonalAboutMeCarouselItem({
	src,
}: Props): React.JSX.Element {
	return (
		<AboutMeCardBodyContainer src={src}>
			<Card.Text>Blep</Card.Text>
		</AboutMeCardBodyContainer>
	);
}
