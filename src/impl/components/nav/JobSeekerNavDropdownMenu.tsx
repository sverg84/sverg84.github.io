import * as React from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { HashLink } from 'react-router-hash-link';

import JobSeekerNavItems from '../../consts/JobSeekerNavItems';
import styles from '../../styles/nav/navdropdown.module.css';

export default function JobSeekerDropdownMenu(): React.JSX.Element {
	return (
		<>
			{JobSeekerNavItems.map(item => (
				<HashLink
					className={styles.item}
					key={item.label}
					smooth={true}
					to={item.to}>
					<DropdownItem as="span">{item.label}</DropdownItem>
				</HashLink>
			))}
		</>
	);
}
