import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import * as React from 'react';

import ExternalLinkButton from './ExternalLinkButton';

const GITHUB_COLOR: string = '#171515';

export default function GitHubButton(): React.JSX.Element {
	return (
		<ExternalLinkButton
            color={GITHUB_COLOR}
			href="https://github.com/sverg84"
			icon={brands('github')}
		/>
	);
}
