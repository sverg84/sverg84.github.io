import classNames from 'classnames';
import * as React from 'react';

import pageBodyStyles from '../../styles/pageBody.module.css';
import pageStyles from '../../styles/pageMargin.module.css';
import AboutMeCard from './about/AboutMeCard';
import ExperienceCard from './experience/ExperienceCard';

export default function PageBody(): React.JSX.Element {
	return (
		<div className={classNames(pageStyles.page, pageBodyStyles.body)}>
			<AboutMeCard />
			<ExperienceCard />
		</div>
	);
}
