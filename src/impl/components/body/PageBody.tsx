import * as React from 'react';

import PageMarginStyle from '../../consts/PageMarginStyle';
import AboutMeCard from './about/AboutMeCard';
import ExperienceCard from './experience/ExperienceCard';

const body: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	marginTop: 24,
	rowGap: 24,
} as const;

export default function PageBody(): React.JSX.Element {
	return (
		<div style={{...PageMarginStyle, ...body}}>
			<AboutMeCard />
			<ExperienceCard />
		</div>
	);
}
