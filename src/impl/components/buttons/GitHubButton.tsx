import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import ExternalLinkButton from './ExternalLinkButton';

export default function GitHubButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
			href="https://github.com/sverg84"
			icon={brands('github')}
		/>
	);
}
