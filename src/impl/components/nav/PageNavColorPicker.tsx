import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';

import styles from '../../styles/nav/colorPicker.module.scss';
import lazyWithPreload from '../../utils/lazyWithPreload.ts';

const PageNavColorPickerMenu = lazyWithPreload(() =>
	import('./PageNavColorPickerMenu.tsx'),
);

export default function PageNavColorPicker(): React.JSX.Element {
	const onMouseEnter = () => {
		PageNavColorPickerMenu.preload();
	};

	return (
		<NavDropdown
			align="end"
			className={styles.icon}
			renderMenuOnMount={false}
			title={
				<FontAwesomeIcon
					icon={solid('palette')}
					bounce={true}
				/>
			}
			onMouseEnter={onMouseEnter}>
			<React.Suspense
				fallback={
					<div className={styles.fallback}>
						<Spinner
							animation="border"
							variant="secondary"
						/>
					</div>
				}>
				<PageNavColorPickerMenu />
			</React.Suspense>
		</NavDropdown>
	);
}
