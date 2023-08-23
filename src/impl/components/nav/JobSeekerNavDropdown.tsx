import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Spinner from 'react-bootstrap/esm/Spinner';

import useColorStyle from '../../hooks/useColorStyle.ts';
import styles from '../../styles/nav/navdropdown.module.css';
import lazyWithPreload from '../../utils/lazyWithPreload';

const JobSeekerDropdownMenu = lazyWithPreload(() =>
	import('./JobSeekerNavDropdownMenu.tsx'),
);

export default function JobSeekerNavDropdown(): React.JSX.Element {
	const color = useColorStyle();

	const onMouseEnter = () => {
		JobSeekerDropdownMenu.preload();
	};

	return (
		<NavDropdown
			align="end"
			className={styles.dropdown}
			title="Jump to"
			onMouseEnter={onMouseEnter}>
			<React.Suspense
				fallback={
					<div className={styles.fallback}>
						<Spinner
							className={color}
							animation="border"
							variant="secondary"
						/>
					</div>
				}>
				<JobSeekerDropdownMenu />
			</React.Suspense>
		</NavDropdown>
	);
}
