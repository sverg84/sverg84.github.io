import * as React from 'react';

import PageBody from './PageBody';
import PersonalAboutMeCard from './personal/about/PersonalAboutMeCard';

export default function PersonalBody(): React.JSX.Element {
	return (
		<PageBody>
			<PersonalAboutMeCard />
		</PageBody>
	);
}
