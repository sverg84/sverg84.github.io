import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import ColorContext from '../../contexts/ColorContext';
import menuStyles from '../../styles/nav/colorPickerMenu.module.scss';

export default function PageNavColorPickerMenu(): React.JSX.Element {
	const {color, setColor} = React.useContext(ColorContext);

	return (
		<>
			<NavDropdown.Header className={menuStyles.header}>
				Color Picker
			</NavDropdown.Header>
			<div className={menuStyles.picker}>
				<HexColorPicker
					color={color}
					onChange={setColor}
				/>
				<HexColorInput
					color={color}
					onChange={setColor}
				/>
			</div>
		</>
	);
}
