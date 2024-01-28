import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Spinner from 'react-bootstrap/esm/Spinner';

import useColorStyle from '../../hooks/useColorStyle.ts';
import styles from '../../styles/nav/navdropdown.module.scss';
import lazyWithPreload from '../../utils/lazyWithPreload';

const JobSeekerDropdownMenu = lazyWithPreload(() =>
	import('./JobSeekerNavDropdownMenu.tsx'),
);

export default function JobSeekerNavDropdown(): React.JSX.Element {
	const style = useColorStyle();

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
							animation="border"
							variant="secondary"
							style={style}
						/>
					</div>
				}>
				<JobSeekerDropdownMenu />
			</React.Suspense>
		</NavDropdown>
	);
}