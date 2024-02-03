import * as React from 'react';

import PersonalBackground from './body/personal/PersonalBackground';
import PersonalBody from './body/PersonalBody';

export function Component(): React.JSX.Element {
	return (
		<>
			<PersonalBackground />
			<PersonalBody />
		</>
	);
}
