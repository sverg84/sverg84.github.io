import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import ExternalLinkButton from './ExternalLinkButton';

export default function LinkedInButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
			href="https://www.linkedin.com/in/stephen-vergara-2bab8614b/"
			icon={brands('linkedin')}
		/>
	);
}
