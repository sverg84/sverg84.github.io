import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import EventKeys from '../../../consts/EventKeys';
import BodyCard from '../BodyCard';
import SkillsItem from './SkillsItem';

export default function SkillsCard(): React.JSX.Element {
	return (
		<BodyCard title="Skills">
			<Accordion defaultActiveKey={EventKeys.eek}>
				<SkillsItem
					eventKey={EventKeys.eek}
					header="Skill 1"
				/>
				<SkillsItem
					eventKey={EventKeys.blep}
					header="Skill 2"
				/>
			</Accordion>
		</BodyCard>
	);
}
