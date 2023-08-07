import classNames from 'classnames';
import * as React from 'react';

import useAfterColorStyle from '../../../hooks/useAfterColorStyle';
import styles from '../../../styles/body/experience/timeline.module.css';
import AppTooltip from '../../AppTooltip';
import ExperienceTimelineItem from './ExperienceTimelineItem';

export type TimelineItemData = Readonly<{
	description: React.JSX.Element;
	skillsList: ReadonlyArray<string>;
	src: string;
    tag: string;
	timeframe: string;
	title: string;
}>;

const items: ReadonlyArray<TimelineItemData> = [
	{
		description: (
			<p>
				Full-stack product software engineer (PHP/Hack and JS/React) for the Org
				Effectiveness team within the Enterprise Engineering division. Released
				multiple high-priority stakeholder feature requests pertaining to
				HR-sensitive employee data. Leader of team app performance optimization
				opportunities.
			</p>
		),
		skillsList: ['PHP', 'React', 'GraphQL', 'MySQL'],
		src: '/meta.gif',
        tag: 'Meta Platforms, Inc.',
		timeframe: '2020-2023',
		title: 'Software Engineer',
	},

	{
		description: (
			<p>
				Intern for the Traffic Analytics team within the Infrastructure
				division. Created monitoring tool for team oncall to measure network
				packet failures with interactive web page.
			</p>
		),
		skillsList: ['C++', 'Python', 'Apache Thrift', 'MySQL'],
		src: '/meta.gif',
        tag: 'Meta Platforms, Inc.',
		timeframe: 'Summer 2019',
		title: 'Software Engineer Intern',
	},
	{
		description: (
			<p>
				Assistant at the university's Transportation Research Institute as part
				of the Undergraduate Research Opportunity Program (UROP). Participated
				in{' '}
				<AppTooltip
					content="anthropometric"
					tooltip={
						'of or relating to the scientific study of the ' +
						'measurements and proportions of the human body'
					}
				/>{' '}
				study for Defence Research & Development Canada (DRDC).
			</p>
		),
		skillsList: ['MATLAB', 'Wolfram Mathematica'],
		src: '/umich.jpeg',
        tag: 'University of Michigan',
		timeframe: '2016-2017',
		title: 'Research Assistant',
	},
];

export default function ExperienceTimeline(): React.JSX.Element {
    const color = useAfterColorStyle();

	return (
		<div className={classNames(styles.timeline, color)}>
			{items.map((item, idx) => (
				<ExperienceTimelineItem
					data={item}
					isOdd={idx % 2 !== 0}
					key={item.title}
				/>
			))}
		</div>
	);
}
