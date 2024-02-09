import * as React from "react";

import ColorContext from "../../contexts/ColorContext";
import brightnessFromHexCode from "../../utils/brightnessFromHexCode";

const BACKGROUND_COLOR = '#1B2735';

export type Props = Readonly<{
    className: string;
	numStars: number;
}>;

export default function Stars({className, numStars}: Props): React.JSX.Element {
	const [color] = React.useContext(ColorContext);

	const colorForStars = React.useMemo(() => {
		const colorBrightness = brightnessFromHexCode(color);
		const backgroundBrightness = brightnessFromHexCode(BACKGROUND_COLOR);
		return colorBrightness > backgroundBrightness * 2 ? color : 'white';
	}, [color]);

	const boxShadow = React.useMemo(() => {
		const rand = () => Math.floor(Math.random() * 2000 + 1);
		const calc = () => `${rand()}px ${rand()}px ${colorForStars}`;

		let shadow = calc();

		for (let i = 2; i <= numStars; i++) {
			shadow = `${shadow}, ${calc()}`;
		}

		return shadow;
	}, [colorForStars, numStars]);

	return (
		<div
			className={className}
			style={{boxShadow}}
		/>
	);
}