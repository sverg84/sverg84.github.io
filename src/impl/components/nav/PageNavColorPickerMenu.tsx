import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import ColorContext from '../../contexts/ColorContext';
import styles from '../../styles/nav/colorPickerMenu.module.scss';

export default function PageNavColorPickerMenu(): React.JSX.Element {
	const {color, setColor} = React.useContext(ColorContext);

	return (
		<>
			<NavDropdown.Header className={styles.header}>
				Color Picker
			</NavDropdown.Header>
			<div className={styles.picker}>
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
