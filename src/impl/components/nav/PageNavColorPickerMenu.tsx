import ColorContext from 'impl/contexts/ColorContext';
import { PopoverHeading } from 'impl/lib/Popover/Popover';
import styles from 'impl/styles/nav/colorPickerMenu.module.scss';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import { HexColorInput, HexColorPicker } from 'react-colorful';

export default function PageNavColorPickerMenu(): React.JSX.Element {
	const [color, setColor] = React.useContext(ColorContext);

	return (
		<Card className={styles.card}>
			<PopoverHeading className={styles.header}>Color Picker</PopoverHeading>
			<section className={styles.picker}>
				<HexColorPicker
					aria-label="Color picker item with color scale"
					color={color}
					id={styles.colors}
					onChange={setColor}
				/>
				<HexColorInput
					aria-label="Input field for hexadecimal color code"
					color={color}
					data-testid="color-input"
					onChange={setColor}
				/>
			</section>
		</Card>
	);
}
