import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

import JobSeekerNavItems from '../../consts/JobSeekerNavItems';
import styles from '../../styles/nav/breadcrumb.module.css';

function Item({
	label,
	to,
}: Readonly<{
	label: string;
	to: string;
}>): React.JSX.Element {
	return (
		<li>
			<HashLink
				className={styles.breadcrumb}
				smooth={true}
				to={to}>
				{label}
			</HashLink>
		</li>
	);
}

export default function JobSeekerNavBreadcrumbs(): React.JSX.Element {
	return (
		<ul className={styles.bread}>
			{JobSeekerNavItems.map(item => (
				<Item
					key={item.label}
					{...item}
				/>
			))}
		</ul>
	);
}
