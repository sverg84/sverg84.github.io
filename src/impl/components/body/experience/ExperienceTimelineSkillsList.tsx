import classNames from 'classnames';
import * as React from 'react';

import styles from '../../../styles/body/experience/skillsList.module.scss';

type Props = Readonly<{
	className?: string;
	skillsList: ReadonlyArray<string>;
}>;

export default function ExperienceTimelineSkillsList({
	className,
	skillsList,
}: Props): React.JSX.Element {
	return (
		<p className={styles.list}>
			<span className={classNames(styles.skills, className)}>Skills: </span>
			{skillsList.join(', ')}
		</p>
	);
}
