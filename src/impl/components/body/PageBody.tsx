import classNames from 'classnames';
import * as React from 'react';

import pageBodyStyles from '../../styles/pageBody.module.css';
import pageStyles from '../../styles/pageMargin.module.css';

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function PageBody({children}: Props): React.JSX.Element {
	return (
		<div className={classNames(pageStyles.page, pageBodyStyles.body)}>
			{children}
		</div>
	);
}