import * as React from 'react';

import PersonalBackground from './body/personal/PersonalBackground';
import PersonalBody from './body/PersonalBody';
import Page from './Page';

export default function AppPersonal(): React.JSX.Element {
	return (
		<Page background={<PersonalBackground />}>
			<PersonalBody />
		</Page>
	);
}
