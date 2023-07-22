import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import ExternalLinkButton from './ExternalLinkButton';

export default function SteamButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
            color="#145c8f"
			href="https://steamcommunity.com/profiles/76561198060926980/"
			icon={brands('steam')}
		/>
	);
}
