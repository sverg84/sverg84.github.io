import * as React from 'react';

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

type Props = Readonly<{
	lastUpdatedTime: Date;
}>;

export default function PageNavLatestPushTimestamp({
	lastUpdatedTime,
}: Props): React.JSX.Element {
	const timeSinceLastUpdate = lastUpdatedTime.getTime() - new Date().getTime();

	return (
		<span>
			Last Updated:{' '}
			<AppTooltip
				content={<time>{relativeTimeFromElapsed(timeSinceLastUpdate)}</time>}
				tooltip={lastUpdatedTime.toLocaleString(undefined)}
			/>
		</span>
	);
}
