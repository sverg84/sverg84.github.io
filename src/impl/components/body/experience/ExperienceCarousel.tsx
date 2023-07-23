import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import AppTooltip from '../../AppTooltip';
import ExperienceCarouselHeader from './ExperienceCarouselHeader';
import ExperienceCarouselTextSection from './ExperienceCarouselTextSection';

export default function ExperienceCarousel(): React.JSX.Element {
	const [index, setIndex] = React.useState<number>(0);
	const onSelect = (newIndex: number) => {
		setIndex(newIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			data-bs-theme="dark"
			interval={null}
			onSelect={onSelect}>
			<Carousel.Item>
				<Card.Img src="/meta.gif" />
				<ExperienceCarouselHeader
					timeframe="2020-2023"
					title="Software Engineer at Meta Platforms, Inc."
				/>
				<ExperienceCarouselTextSection>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</ExperienceCarouselTextSection>
			</Carousel.Item>
			<Carousel.Item>
				<Card.Img src="/meta.gif" />
				<ExperienceCarouselHeader
					timeframe="Summer 2019"
					title="Software Engineer Intern at Meta Platforms, Inc."
				/>
				<ExperienceCarouselTextSection>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</ExperienceCarouselTextSection>
			</Carousel.Item>
			<Carousel.Item>
				<Card.Img src="/umich.jpeg" />
				<ExperienceCarouselHeader
					timeframe="2016-2017"
					title="Research Assistant at the University of Michigan"
				/>
				<ExperienceCarouselTextSection>
					<span>
						Assistant at the university's Transportation Research Institute as
						part of the Undergraduate Research Opportunity Program (UROP).
						Participated in{' '}
						<AppTooltip
							content="anthropometric"
							tooltip={
								'of or relating to the scientific study of the ' +
								'measurements and proportions of the human body'
							}
						/> study for Defence Research & Development Canada (DRDC).
					</span>
				</ExperienceCarouselTextSection>
			</Carousel.Item>
		</Carousel>
	);
}
