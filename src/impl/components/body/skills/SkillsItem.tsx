import * as React from 'react';
import AccordionCollapse from 'react-bootstrap/esm/AccordionCollapse';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import Card from 'react-bootstrap/esm/Card';

import SkillsItemToggle from './SkillsItemToggle';

type Props = Readonly<{
	eventKey: string;
	header: string;
}>;

export default function SkillsItem({
	eventKey,
	header,
}: Props): React.JSX.Element {
	return (
		<AccordionItem eventKey={eventKey}>
			<SkillsItemToggle
				eventKey={eventKey}
				label={header}
			/>
			<AccordionCollapse eventKey={eventKey}>
				<Card.Body>{header}</Card.Body>
			</AccordionCollapse>
		</AccordionItem>
	);
}
