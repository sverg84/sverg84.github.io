import classNames from 'classnames';
import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import useBackgroundColorStyle from '../../../hooks/useBackgroundColorStyle';
import useBorderColorStyle from '../../../hooks/useBorderColorStyle';
import useColorStyle from '../../../hooks/useColorStyle';
import styles from '../../../styles/body/experience/timelineItem.module.css';
import transition from '../../../styles/body/experience/transition.module.css';
import ExperienceCarouselSkillsList from './ExperienceCarouselSkillsList';
import type { TimelineItemData } from './ExperienceTimeline';

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
		<div
			className={classNames(styles.item, inView ? transition.in : 'opacity-0')}
			ref={ref}>
			<div className={styles.content}>
				<div className={styles.header}>{header}</div>
				<h6 className={color}>{data.title}</h6>
				{data.description}
				<ExperienceCarouselSkillsList
					className={color}
					skillsList={data.skillsList}
				/>
				<span className={classNames(styles.circle, border)} />
			</div>
		</div>
	);
}
