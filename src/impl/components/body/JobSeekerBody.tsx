import styles from 'impl/styles/pageBody.module.scss';
import * as React from 'react';

import AboutMeCard from './about/AboutMeCard';
import ExperienceCard from './experience/ExperienceCard';
import SkillsCard from './skills/SkillsCard';

export default function JobSeekerBody(): React.JSX.Element {
	return (
		<ul className={styles.body}>
			<AboutMeCard />
			<ExperienceCard />
			<SkillsCard />
		</ul>
	);
}
