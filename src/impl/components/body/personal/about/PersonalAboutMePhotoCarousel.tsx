import * as React from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';

import PersonalAboutMeCarouselItem from './PersonalAboutMeCarouselItem';

export default function PersonalAboutMePhotoCarousel(): React.JSX.Element {
	return (
		<Carousel
			controls={false}
			fade={true}
			indicators={false}
			interval={4000}
			wrap={true}>
			<Carousel.Item>
				<PersonalAboutMeCarouselItem src="/sverg.jpeg" />
			</Carousel.Item>
			<Carousel.Item>
				<PersonalAboutMeCarouselItem src="/pinksuit.jpeg" />
			</Carousel.Item>
			<Carousel.Item>
				<PersonalAboutMeCarouselItem src="/portrait-mode.jpg" />
			</Carousel.Item>
		</Carousel>
	);
}
