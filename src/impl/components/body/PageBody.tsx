import * as React from 'react';

import PageMarginStyle from '../../consts/PageMarginStyle';
import AboutMeCard from './AboutMeCard';

export default function PageBody(): React.JSX.Element {
	return (
		<div style={PageMarginStyle}>
			<AboutMeCard />
		</div>
	);
}
