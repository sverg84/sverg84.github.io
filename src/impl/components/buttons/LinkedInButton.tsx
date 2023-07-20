import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import ExternalLinkButton from './ExternalLinkButton';

const LINKEDIN_COLOR: string = '#0077b5';

export default function LinkedInButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
            color={LINKEDIN_COLOR}
			href="https://www.linkedin.com/in/stephen-vergara-2bab8614b/"
			icon={brands('linkedin')}
		/>
	);
}
