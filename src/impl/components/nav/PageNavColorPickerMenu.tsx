import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';

import menuStyles from '../../styles/nav/colorPickerMenu.module.scss';
import { PAGE_COLORS, PageColorHex } from '../../types/PageColor';
import ColorIcon from './ColorIcon';

export default function PageNavColorPickerMenu(): React.JSX.Element {
	return (
		<>
			<NavDropdown.Header className={menuStyles.header}>Color Picker</NavDropdown.Header>
			{Object.entries(PAGE_COLORS).map(([colorLabel, colorCode]) => {
				return (
					<NavDropdown.Item
						className={menuStyles.dropdown}
						eventKey={colorLabel}
						key={colorCode}>
						<ColorIcon color={colorCode as PageColorHex} />
						{colorLabel}
					</NavDropdown.Item>
				);
			})}
		</>
	);
}
