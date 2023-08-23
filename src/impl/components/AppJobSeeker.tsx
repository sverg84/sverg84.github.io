import * as React from 'react';

import AppBackground from './AppBackground';
import JobSeekerBody from './body/JobSeekerBody';
import JobSeekerNavWrapper from './nav/JobSeekerNavWrapper';
import Page from './Page';

export default function AppJobSeeker(): React.JSX.Element {
	return (
		<Page breadcrumbs={<JobSeekerNavWrapper />}>
			<AppBackground />
			<JobSeekerBody />
		</Page>
	);
}