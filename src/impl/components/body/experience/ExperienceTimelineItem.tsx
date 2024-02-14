import classNames from 'classnames';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import useBackgroundColorStyle from '../../../hooks/useBackgroundColorStyle';
import useBorderColorStyle from '../../../hooks/useBorderColorStyle';
import useColorStyle from '../../../hooks/useColorStyle';
import styles from '../../../styles/body/experience/timelineItem.module.scss';
import type { TimelineItemData } from './ExperienceTimeline';
import ExperienceTimelineSkillsList from './ExperienceTimelineSkillsList';

type Props = Readonly<{
	data: TimelineItemData;
	isOdd: boolean;
}>;

export default function ExperienceTimelineItem({
	data,
	isOdd,
}: Props): React.JSX.Element {
	const background = useBackgroundColorStyle();
	const border = useBorderColorStyle();
	const color = useColorStyle();

	const {inView, ref} = useInView({
		triggerOnce: true,
		rootMargin: '-200px 0px',
	});

	const tag = (
		<span className={styles.tag} style={background}>{data.tag}</span>
	);
	const time = <time>{data.timeframe}</time>;

	const header = isOdd ? (
		<>
			{tag}
			{time}
		</>
	) : (
		<>
			{time}
			{tag}
		</>
	);

	return (
		<div className={styles.item}>
			<div
				className={classNames(styles.content, inView ? styles.in : 'opacity-0')}
				data-testid={`exp-item-${data.id}`}
				ref={ref}>
				<header className={styles.header}>{header}</header>
				<h6 style={color}>{data.title}</h6>
				<img
					loading="lazy"
					src={data.src}
					width="100%"
				/>
				{data.description}
				<ExperienceTimelineSkillsList
					style={color}
					skillsList={data.skillsList}
				/>
			</div>
			<span
				className={styles.circle}
				style={border}
			/>
		</div>
	);
}
