import * as React from 'react';

import AppBackground from './AppBackground';
import JobSeekerBody from './body/JobSeekerBody';
import JobSeekerNavWrapper from './nav/JobSeekerNavWrapper';
import Page from './Page';

export function Component(): React.JSX.Element {
	return (
		<Page
			background={<AppBackground />}
			breadcrumbs={<JobSeekerNavWrapper />}>
			<JobSeekerBody />
		</Page>
	);
}
