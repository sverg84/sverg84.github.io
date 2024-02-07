import * as React from 'react';

import token from '../../../token';
import AppTooltip from '../AppTooltip';

// https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
const RTF = new Intl.RelativeTimeFormat(undefined, {numeric: 'auto'});

const UNITS: {unit: Intl.RelativeTimeFormatUnit; ms: number}[] = [
	{unit: 'year', ms: 31536000000},
	{unit: 'month', ms: 2628000000},
	{unit: 'day', ms: 86400000},
	{unit: 'hour', ms: 3600000},
	{unit: 'minute', ms: 60000},
	{unit: 'second', ms: 1000},
];

function relativeTimeFromElapsed(elapsed: number): string {
	for (const {unit, ms} of UNITS) {
		if (Math.abs(elapsed) >= ms || unit === 'second') {
			return RTF.format(Math.round(elapsed / ms), unit);
		}
	}
	return '';
}

export default function PageNavLatestPushTimestamp(): React.JSX.Element | null {
	const [lastUpdatedTime, setLastUpdatedTime] = React.useState<Date | null>(
		null,
	);

	React.useEffect(() => {
		const fetchTime = async () => {
			try {
				const response = await fetch(
					'https://api.github.com/repos/sverg84/sverg84.github.io',
					{
						headers: {
							Authorization: `token ${token}`,
						},
					},
				);
				if (!response.ok) {
					throw new Error(`${response.status}: ${response.statusText}`);
				}
				const data = await response.json();
				const updateTime: string = data['pushed_at'];
				setLastUpdatedTime(new Date(updateTime));
			} catch (error) {
				console.warn(error);
			}
		};

		fetchTime();
	}, []);

	if (lastUpdatedTime == null) {
		return null;
	}

	const timeSinceLastUpdate = lastUpdatedTime.getTime() - new Date().getTime();

	return (
		<>
			Last Updated:{' '}
			<AppTooltip
				content={relativeTimeFromElapsed(timeSinceLastUpdate)}
				tooltip={lastUpdatedTime.toLocaleString(undefined)}
			/>
		</>
	);
}
