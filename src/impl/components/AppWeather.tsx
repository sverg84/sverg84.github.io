import classNames from 'classnames';
import * as React from 'react';

import styles from '../styles/weather.module.scss';
import AppTooltip from './AppTooltip';

type WeatherData = Readonly<{
	celsius: number;
	city: string;
	description: string;
	fahrenheit: number;
	icon: string;
	sunrise: number;
	sunset: number;
}>;

export default function AppWeather(): React.JSX.Element | null {
	const [weather, setWeather] = React.useState<WeatherData | null>(null);
	const [className, setClassName] = React.useState<string | null>(null);

	const ref = React.useRef(null);

	React.useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://vjkuarupgi.execute-api.us-east-2.amazonaws.com/default',
			);

			const data: WeatherData = await response.json();

			const {sunrise, sunset} = data;
			const currentTime = new Date().getTime();

			setClassName(
				currentTime < sunrise * 1000 || currentTime >= sunset * 1000
					? styles.night
					: styles.day,
			);
			setWeather(data);
		};

		fetchData();
	}, []);

	return weather != null ? (
		<article className={classNames(styles.weather, className)}>
			<article className={styles.content}>
				{weather.city}
				<AppTooltip
					placement="left"
					trigger={
						<img
							alt={weather.description}
							className={styles.img}
							ref={ref}
							src={weather.icon}
							width={64}
							height={64}
						/>
					}
					content={weather.description}></AppTooltip>
				{weather.fahrenheit}&deg;F / {weather.celsius}&deg;C
			</article>
		</article>
	) : null;
}
