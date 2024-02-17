import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyPopoverTrigger, Popover } from 'impl/lib/Popover/Popover';
import styles from 'impl/styles/nav/colorPicker.module.scss';
import lazyWithPreload from 'impl/utils/lazyWithPreload';
import * as React from 'react';

import ColorPickerMenuFallback from './ColorPickerMenuFallback';

const PageNavColorPickerMenu = lazyWithPreload(() =>
	import('./PageNavColorPickerMenu'),
);

export default function PageNavColorPicker(): React.JSX.Element {
	return (
		<Popover>
			<LazyPopoverTrigger
				className={styles.picker}
				contentClassname={styles.popover}
				ContentFactory={PageNavColorPickerMenu}
				fallback={<ColorPickerMenuFallback />}>
				<FontAwesomeIcon
					icon={solid('palette')}
					bounce={true}
				/>
				<FontAwesomeIcon
					icon={solid('chevron-down')}
					size="2xs"
				/>
			</LazyPopoverTrigger>
		</Popover>
	);
}
