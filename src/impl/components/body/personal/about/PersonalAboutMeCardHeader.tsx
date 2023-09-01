import classNames from 'classnames';
import * as React from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader';

import useBackgroundColorStyle from '../../../../hooks/useBackgroundColorStyle';
import useColorStyle from '../../../../hooks/useColorStyle';
import styles from '../../../../styles/body/personal/about/header.module.scss';

const HEADER_LABEL = 'Oh, Hello!';

export default function PersonalAboutMeCardHeader(): React.JSX.Element {
	const color = useColorStyle();
	const bg = useBackgroundColorStyle(undefined, true);

	return (
		<CardHeader
			as="h2"
			className={classNames(color, styles.header, bg)}>
			{HEADER_LABEL.split('').map((character, index, label) => (
				<span key={character + (index > 0 ? label[index - 1] : '')}>
					{character}
				</span>
			))}
		</CardHeader>
	);
}
