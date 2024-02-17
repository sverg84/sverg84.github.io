import * as React from 'react';

import BodyCardWrapper from '../BodyCardWrapper';
import AboutMeCardBody from './AboutMeCardBody';
import AboutMeCardFooter from './AboutMeCardFooter';

export default function AboutMeCard(): React.JSX.Element {
	return (
		<BodyCardWrapper id="about">
			<AboutMeCardBody />
			<AboutMeCardFooter />
		</BodyCardWrapper>
	);
}
