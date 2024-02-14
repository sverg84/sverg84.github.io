import * as React from 'react';

import styles from '../../../styles/body/experience/skillsList.module.scss';

type Props = Readonly<{
	skillsList: ReadonlyArray<string>;
	style?: React.CSSProperties;
}>;

export default function ExperienceTimelineSkillsList({
	skillsList,
	style,
}: Props): React.JSX.Element {
	return (
		<section className={styles.section}>
			<label
				className={styles.label}
				style={style}>
				Skills:
			</label>
			<ul className={styles.list}>
				{skillsList.map(skill => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</section>
	);
}
