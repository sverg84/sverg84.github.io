import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from 'impl/styles/nav/colorPicker.module.scss';
import lazyWithPreload from 'impl/utils/lazyWithPreload.ts';
import * as React from 'react';
import { Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const PageNavColorPickerMenu = lazyWithPreload(() =>
	import('./PageNavColorPickerMenu'),
);

export default function PageNavColorPicker(): React.JSX.Element {
	const [isShown, setIsShown] = React.useState<boolean>(false);

	const onMouseEnter = () => {
		PageNavColorPickerMenu.preload();
	};

	const onClick = () => {
		setIsShown(!isShown);
	};

	return (
		<>
			<button
				aria-label="Color picker"
				data-testid="color-icon"
				className={styles.picker}
				onClick={onClick}
				onMouseEnter={onMouseEnter}>
				<FontAwesomeIcon
					icon={solid('palette')}
					bounce={true}
				/>
				<FontAwesomeIcon
					icon={solid('chevron-down')}
					size="2xs"
				/>
			</button>
			{isShown && (
				<Card
					className={styles.eek}
					data-testid="color-suspense">
					<React.Suspense
						fallback={
							<Spinner
								className={styles.fallback}
								data-testid="color-suspense"
								animation="border"
								variant="secondary"
							/>
						}>
						<PageNavColorPickerMenu />
					</React.Suspense>
				</Card>
			)}
		</>
	);
}
