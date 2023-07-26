import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import AppTooltip from '../../AppTooltip';
import ExperienceCarouselHeader from './ExperienceCarouselHeader';
import ExperienceCarouselSkillsList from './ExperienceCarouselSkillsList';
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
					<p>
						Full-stack product software engineer (PHP/Hack and JS/React) for Org
						Effectiveness team within the Enterprise Engineering division.
						Released multiple high-priority stakeholder feature requests
						pertaining to HR-sensitive employee data. Leader of team app
						performance optimization opportunities.
					</p>
					<ExperienceCarouselSkillsList
						skillsList={['PHP', 'React', 'GraphQL', 'MySQL']}
					/>
				</ExperienceCarouselTextSection>
			</Carousel.Item>
			<Carousel.Item>
				<Card.Img src="/meta.gif" />
				<ExperienceCarouselHeader
					timeframe="Summer 2019"
					title="Software Engineer Intern at Meta Platforms, Inc."
				/>
				<ExperienceCarouselTextSection>
					<p>
						Intern for the Traffic Analytics team within the Infrastructure
						division. Created monitoring tool for team oncall to measure network
						packet failures with interactive web page.
					</p>
					<ExperienceCarouselSkillsList
						skillsList={['C++', 'Python', 'Apache Thrift', 'MySQL']}
					/>
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
						/>{' '}
						study for Defence Research & Development Canada (DRDC).
					</span>
					<ExperienceCarouselSkillsList
						skillsList={['MATLAB', 'Wolfram Mathematica']}
					/>
				</ExperienceCarouselTextSection>
			</Carousel.Item>
		</Carousel>
	);
}