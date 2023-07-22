import * as React from 'react';

import ExperienceCarouselTextSection from './ExperienceCarouselTextSection';

type Props = Readonly<{
	timeframe: string;
	title: string;
}>;

export default function ExperienceCarouselHeader({
    timeframe,
	title,
}: Props): React.JSX.Element {
	return (
		<ExperienceCarouselTextSection top={true}>
			<h2>{title}</h2>
            <h2>({timeframe})</h2>
		</ExperienceCarouselTextSection>
	);
}
