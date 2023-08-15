import * as React from 'react';

import AboutMeCard from './about/AboutMeCard';
import ExperienceCard from './experience/ExperienceCard';
import PageBody from './PageBody';
import SkillsCard from './skills/SkillsCard';

export default function JobSeekerBody(): React.JSX.Element {
	return (
		<PageBody>
			<AboutMeCard />
			<ExperienceCard />
			<SkillsCard />
		</PageBody>
	);
}
