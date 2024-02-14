import * as React from 'react';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import ColorContext from '../../contexts/ColorContext';
import styles from '../../styles/nav/colorPickerMenu.module.scss';

export default function PageNavColorPickerMenu(): React.JSX.Element {
	const [color, setColor] = React.useContext(ColorContext);

	return (
		<>
			<NavDropdown.Header
				as="header"
				className={styles.header}>
				Color Picker
			</NavDropdown.Header>
			<section className={styles.picker}>
				<HexColorPicker
					aria-label="Color picker item with color scale"
					color={color}
					onChange={setColor}
				/>
				<HexColorInput
					aria-label="Input field for hexadecimal color code"
					color={color}
					data-testid="color-input"
					onChange={setColor}
				/>
			</section>
		</>
	);
}
