import classNames from 'classnames';
import styles from 'impl/styles/nav/colorPickerMenu.module.scss';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function ColorPickerMenuFallback(): React.JSX.Element {
	return (
		<Card className={classNames(styles.card, styles.fallback)}>
			<Spinner
				data-testid="color-suspense"
				animation="border"
				variant="secondary"
			/>
		</Card>
	);
}
