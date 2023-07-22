import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import Spinner from 'react-bootstrap/Spinner';

import SetPageColorContext from '../../contexts/SetPageColorContext';
import { isPageColor } from '../../types/PageColor';

const PageNavColorPickerMenu = React.lazy(() =>
	import('./PageNavColorPickerMenu.tsx'),
);

const DROPDOWN_WIDTH: number = 177;
const DROPDOWN_HEIGHT: number = 262;

const fallback: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: DROPDOWN_HEIGHT,
	width: DROPDOWN_WIDTH,
} as const;

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
			renderMenuOnMount={false}
			style={{color: 'white'}}
			title={
				<FontAwesomeIcon
					icon={solid('palette')}
					bounce={true}
				/>
			}
			onSelect={onSelect}>
			<React.Suspense
				fallback={
					<div style={fallback}>
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
