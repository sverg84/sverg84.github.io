import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';

import SetPageColorContext from '../../contexts/SetPageColorContext';
import styles from '../../styles/nav/colorPicker.module.css';
import { isPageColor } from '../../types/PageColor';

const PageNavColorPickerMenu = React.lazy(() =>
	import('./PageNavColorPickerMenu.tsx'),
);

export default function PageNavColorPicker(): React.JSX.Element {
	const setColor = React.useContext(SetPageColorContext);

	const onSelect = React.useCallback(
		(eventKey: string | null) => {
			if (isPageColor(eventKey)) {
				setColor(eventKey);
			}
		},
		[setColor],
	);

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
			onSelect={onSelect}>
			<React.Suspense
				fallback={
					<div className={styles.fallback}>
						<Spinner
							animation="border"
							variant="primary"
						/>
					</div>
				}>
				<PageNavColorPickerMenu />
			</React.Suspense>
		</NavDropdown>
	);
}
