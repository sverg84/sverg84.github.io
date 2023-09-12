import * as React from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';

import PersonalAboutMeCarouselItem from './PersonalAboutMeCarouselItem';

const IMAGES = ['/portrait-mode.jpg', '/pinksuit.jpeg', '/dokidoki.jpeg'];

export default function PersonalAboutMePhotoCarousel(): React.JSX.Element {
	return (
		<Carousel
			controls={false}
			fade={true}
			indicators={false}
			interval={4000}
			wrap={true}>
			{IMAGES.map(img => (
				<Carousel.Item key={img}>
					<PersonalAboutMeCarouselItem src={img} />
				</Carousel.Item>
			))}
		</Carousel>
	);
}
