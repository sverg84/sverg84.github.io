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
		<span className={classNames(styles.tag, background)}>{data.tag}</span>
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
				ref={ref}>
				<div className={styles.header}>{header}</div>
				<h6 className={color}>{data.title}</h6>
				<img
					loading="lazy"
					src={data.src}
					width="100%"
				/>
				{data.description}
				<ExperienceTimelineSkillsList
					className={color}
					skillsList={data.skillsList}
				/>
			</div>
			<span className={classNames(styles.circle, border)} />
		</div>
	);
}
