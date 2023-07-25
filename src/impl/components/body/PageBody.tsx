import classNames from 'classnames';
import * as React from 'react';

import pageBodyStyles from '../../styles/pageBody.module.css';
import pageStyles from '../../styles/pageMargin.module.css';
import AboutMeCard from './about/AboutMeCard';
import ExperienceCard from './experience/ExperienceCard';

type Props = Readonly<{
	className?: string;
}>;

export default function PageBody({className}: Props): React.JSX.Element {
	return (
		<div
			className={classNames(className, pageStyles.page, pageBodyStyles.body)}>
			<AboutMeCard />
			<ExperienceCard />
		</div>
	);
}
