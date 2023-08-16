import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import * as React from 'react';
import { AccordionContext, useAccordionButton } from 'react-bootstrap';

import EventKeys from '../../../consts/EventKeys';
import useActiveBackgroundColorStyle from '../../../hooks/useActiveBackgroundColorStyle';
import styles from '../../../styles/body/skills/item.module.css';

type Props = Readonly<{
	callback?: (eventKey: string) => void;
	eventKey: string;
}>;

export default function SkillsItemToggle({
	callback,
	eventKey,
}: Props): React.JSX.Element {
	const {activeEventKey} = React.useContext(AccordionContext);
	const color = useActiveBackgroundColorStyle();
	const onClick = useAccordionButton(eventKey, () => {
		callback && callback(eventKey);
	});

	const isCurrentEventKey = activeEventKey === eventKey;

	const classnames: Array<string> = [styles.button];

	if (isCurrentEventKey) {
		classnames.push(color);
		classnames.push(styles.expand);
		if (eventKey === EventKeys.react) {
			classnames.push(styles.firstExpand);
		}
	} else {
		classnames.push(styles.collapse);
	}

	return (
		<button
			className={classNames(classnames)}
			onClick={onClick}>
			{eventKey}
			<FontAwesomeIcon
				icon={isCurrentEventKey ? solid('chevron-up') : solid('chevron-down')}
			/>
		</button>
	);
}
