import * as React from 'react';

import PersonalBody from './body/PersonalBody';
import Page from './Page';

export default function AppPersonal(): React.JSX.Element {
	return (
		<Page>
			<PersonalBody />
		</Page>
	);
}
