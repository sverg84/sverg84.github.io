import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import EventKeys from '../../../consts/EventKeys';
import EventKeyToSkillText from '../../../consts/EventKeyToSkillText';
import BodyCard from '../BodyCard';
import SkillsItem from './SkillsItem';

export default function SkillsCard(): React.JSX.Element {
	return (
		<BodyCard
			id="skills"
			title="Skills">
			<Accordion defaultActiveKey={EventKeys.react}>
				{EventKeyToSkillText.map(([eventKey, skillText]) => (
					<SkillsItem
						eventKey={eventKey}
						key={eventKey}>
						{skillText}
					</SkillsItem>
				))}
			</Accordion>
		</BodyCard>
	);
}
