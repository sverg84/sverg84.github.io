import * as React from 'react';

import BodyCard from '../BodyCard';
import ExperienceTimeline from './ExperienceTimeline';

export default function ExperienceCard(): React.JSX.Element {
	return (
		<BodyCard title="Experience">
			<ExperienceTimeline />
		</BodyCard>
	);
}
