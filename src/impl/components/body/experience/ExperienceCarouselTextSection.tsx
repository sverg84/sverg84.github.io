import * as React from 'react';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

import styles from '../../../styles/body/experience/carouselText.module.css';

type Props = Readonly<{
	children: React.ReactNode;
	top?: boolean;
}>;

export default function ExperienceCarouselTextSection({
	children,
	top = false,
}: Props): React.JSX.Element {
	return (
		<CarouselCaption className={top ? styles.top : undefined}>
			{children}
		</CarouselCaption>
	);
}
