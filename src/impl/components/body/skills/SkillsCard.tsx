import * as React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import EventKeys from '../../../consts/EventKeys';
import BodyCard from '../BodyCard';
import SkillsItem from './SkillsItem';

export default function SkillsCard(): React.JSX.Element {
	return (
		<BodyCard title="Skills">
			<Accordion defaultActiveKey={EventKeys.react}>
				<SkillsItem eventKey={EventKeys.react}>
					Ramped up on React skills while transitioning from web infra (PHP) to
					UI programming in my full-time position at Meta. Developed an
					expertise in applying Hooks, code-splitting APIs, and React18
					concurrency features to create seamless user experiences while
					optimizing app/page performance. Expanding upon Meta-internal skills
					with public React app building (e.g., this web page!).
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.typescript}>
					Self-taught during the summer of 2023 in order to create a modern
					React app at home while still enforcing type safety. Very similar to
					Meta's "Flow" but with broader appeal.
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.hack}>
					First programming language learned while working full-time at Meta.
					Built multiple scalable features by focusing on asynchronous
					programming. Moved to implementing GraphQL queries and mutations on
					the server side in addition to server-calling React routes and their
					corresponding components.
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.graphql}>
					Learned back-end GraphQL field implementation skills while learning
					Hack, and gained client-side GraphQL experience in tandem with coding
					in React while full-time at Meta.
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.mysql}>
					Database management skills applied during both the internship and
					full-time Meta experiences. MySQL queries created for mass aggregates
					of traffic data in C++/Python, queries and mutations optimized for
					employee directory information in Hack.
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.python}>
					First applied in class projects around web development (e.g., Flask,
					Jinja, REST) while at the University of Michigan, later used to create
					data pipeline jobs for traffic aggregation as an intern at Meta.
					Presently, using FastAPI and PostgreSQL for personal projects.
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.cpp}>
					First programming language learned as an undergraduate at the
					University of Michigan. Used for package building and app compression
					while coding as a Meta intern. Skills in asynchronous programming
					(e.g., threads, mutexes, semaphores, etc.) and file system management
					as part of a course on operating systems.
				</SkillsItem>
				<SkillsItem eventKey={EventKeys.csharp}>
					Onboarded as part of university senior capstone project at Michigan.
					Gained experience in C# in order to create a video game as part of a
					team of four (4) using the Unity game engine.
				</SkillsItem>
			</Accordion>
		</BodyCard>
	);
}
