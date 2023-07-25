import * as React from 'react';

import styles from '../../../styles/body/experience/skillsList.module.css';

type Props = Readonly<{
	skillsList: ReadonlyArray<string>;
}>;

export default function ExperienceCarouselSkillsList({
	skillsList,
}: Props): React.JSX.Element {
	return (
		<p>
			<span className={styles.skills}>Skills: </span>
			{skillsList.join(', ')}
		</p>
	);
}
