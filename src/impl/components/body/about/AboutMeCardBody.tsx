import * as React from 'react';

import MyName from '../../../consts/MyName';
import AboutMeCardBodyContainer from './AboutMeCardBodyContainer';
import AboutMeText from './AboutMeText';

export default function AboutMeCardBody(): React.JSX.Element {
	return (
		<AboutMeCardBodyContainer
			alt={`Picture of ${MyName}`}
			src="/sverg.jpeg">
			<AboutMeText />
		</AboutMeCardBodyContainer>
	);
}
