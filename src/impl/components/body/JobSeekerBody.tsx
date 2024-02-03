import * as React from 'react';

import AboutMeCard from './about/AboutMeCard';
import ExperienceCard from './experience/ExperienceCard';
import SkillsCard from './skills/SkillsCard';

export default function JobSeekerBody(): React.JSX.Element {
	return (
		<>
			<AboutMeCard />
			<ExperienceCard />
			<SkillsCard />
		</>
	);
}
