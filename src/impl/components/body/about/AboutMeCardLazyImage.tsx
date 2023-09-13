import * as React from 'react';
import Placeholder from 'react-bootstrap/esm/Placeholder';

import styles from '../../../styles/body/about/aboutMeCardBody.module.scss';
import type { Props as ImageProps } from '../about/AboutMeCardImage';

const AboutMeCardImage = React.lazy(
	async () => await import('../about/AboutMeCardImage'),
);

export default function AboutMeCardLazyImage(
	props: ImageProps,
): React.JSX.Element {
	return (
		<React.Suspense
			fallback={
				<Placeholder
					animation="wave"
					as="div"
					bg="secondary"
					className={styles.glimmer}
				/>
			}>
			<AboutMeCardImage {...props} />
		</React.Suspense>
	);
}
