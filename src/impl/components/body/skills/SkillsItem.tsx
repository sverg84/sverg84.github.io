import * as React from 'react';
import AccordionCollapse from 'react-bootstrap/esm/AccordionCollapse';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import Card from 'react-bootstrap/esm/Card';

import SkillsItemToggle from './SkillsItemToggle';

type Props = Readonly<{
	children: React.ReactNode;
	eventKey: string;
}>;

export default function SkillsItem({
	children,
	eventKey,
}: Props): React.JSX.Element {
	return (
		<AccordionItem eventKey={eventKey}>
			<SkillsItemToggle eventKey={eventKey} />
			<AccordionCollapse eventKey={eventKey}>
				<Card.Body>{children}</Card.Body>
			</AccordionCollapse>
		</AccordionItem>
	);
}
