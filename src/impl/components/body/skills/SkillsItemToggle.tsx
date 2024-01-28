import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import * as React from 'react';
import { AccordionContext, useAccordionButton } from 'react-bootstrap';

import EventKeys from '../../../consts/EventKeys';
import useBackgroundColorStyle from '../../../hooks/useBackgroundColorStyle';
import styles from '../../../styles/body/skills/item.module.scss';

type Props = Readonly<{
	eventKey: string;
}>;

export default function SkillsItemToggle({eventKey}: Props): React.JSX.Element {
	const {activeEventKey} = React.useContext(AccordionContext);
	const color = useBackgroundColorStyle();
	const onClick = useAccordionButton(eventKey);

	const isCurrentEventKey = activeEventKey === eventKey;

	const classnames: Array<string> = [];

	if (isCurrentEventKey) {
		classnames.push(
			eventKey === EventKeys.react ? styles.firstExpand : styles.expand,
		);
	} else {
		classnames.push(styles.collapse);
	}

	return (
		<button
			className={classNames(classnames)}
			style={isCurrentEventKey ? color : undefined}
			onClick={onClick}>
			{eventKey}
			<FontAwesomeIcon
				icon={isCurrentEventKey ? solid('chevron-up') : solid('chevron-down')}
			/>
		</button>
	);
}
