import * as React from 'react';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

const style: React.CSSProperties = {
	marginTop: 36,
	top: 0,
} as const;

type Props = Readonly<{
	children: React.ReactNode;
	top?: boolean;
}>;

export default function ExperienceCarouselTextSection({
	children,
	top = false,
}: Props): React.JSX.Element {
	return (
		<CarouselCaption style={top ? style : undefined}>
			{children}
		</CarouselCaption>
	);
}
