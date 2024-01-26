import * as React from 'react';

import ColorContext from '../../../contexts/ColorContext';
import styles from '../../../styles/body/personal/background.module.scss';

type StarsProps = Readonly<{
	className: string;
	numStars: number;
}>;

const STARS: ReadonlyArray<StarsProps> = [
	{className: styles.stars, numStars: 700},
	{className: styles.stars2, numStars: 200},
	{className: styles.stars3, numStars: 100},
];

function Stars({className, numStars}: StarsProps): React.JSX.Element {
	const {color} = React.useContext(ColorContext);

	const boxShadow = React.useMemo(() => {
		const rand = () => Math.floor(Math.random() * 2000 + 1);
		const calc = () => `${rand()}px ${rand()}px ${color}`;

		let shadow = calc();

		for (let i = 2; i <= numStars; i++) {
			shadow = `${shadow}, ${calc()}`;
		}

		return shadow;
	}, [color, numStars]);

	return <div className={className} style={{boxShadow}} />;
}

export default function PersonalBackground(): React.JSX.Element {
	return (
		<div className={styles.background}>
			{STARS.map(props => (
				<Stars
					{...props}
					key={props.className}
				/>
			))}
		</div>
	);
}
