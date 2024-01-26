import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Link } from 'react-router-dom';

import MyName from '../../../consts/MyName';
import useColorStyle from '../../../hooks/useColorStyle';
import styles from '../../../styles/body/about/text.module.scss';

const BIRTHDATE: Date = new Date('1998-05-06T10:47:00.000-06:00'); // 6 May 1998 11:47 A.M. US Central Time

function Language({language}: {language: string}): React.JSX.Element {
	const color = useColorStyle();
	return (
		<span
			className={styles.bold}
			style={color}>
			{language}
		</span>
	);
}

export default function AboutMeText(): React.JSX.Element {
	const color = useColorStyle();
	const age = moment.duration(moment().diff(BIRTHDATE)).years();

	return (
		<>
			<Card.Text
				as="h2"
				className={classNames('text-center', 'text-xl-start')}
				style={color}>
				About Me
			</Card.Text>
			<Card.Text
				as="h6"
				className={classNames(styles.italic, 'text-center', 'text-xl-start')}>
				Front-End Software Engineer, Web Developer
			</Card.Text>
			<Card.Text>
				Hi there! My name is{' '}
				<span
					className={classNames(styles.bold, styles.italic)}
					style={color}>
					{MyName}
				</span>
				. I am a {age} year-old software engineer with a fondness for user
				interface and user experience (UI/UX) development.
			</Card.Text>
			<Card.Text>
				I started learning to code during my senior year of high school when I
				took an introduction course to {<Language language="Java" />} on a whim,
				and I loved learning as much as I could since then! Throughout my time
				at university, I applied myself to a substantial amount of coursework in{' '}
				{<Language language="C++" />} and {<Language language="Python" />} with
				a splash of {<Language language="JavaScript" />},{' '}
				{<Language language="OCaml" />}, and {<Language language="C#" />}.
			</Card.Text>
			<Card.Text>
				All of my full-time experience (as of Summer 2023) stems from my time at
				Meta where I challenged myself further in exploring web programming,
				learning {<Language language="PHP" />} and{' '}
				{<Language language="React" />} for the first time in a rigorous,
				fast-paced environment.
			</Card.Text>
			<Card.Text>
				Since parting with Meta, I have been self-teaching{' '}
				{<Language language="TypeScript" />} in order to keep my UI-building
				skills fresh, replete with {<Language language="SCSS" />} modules.
			</Card.Text>
			<Card.Text>
				Click{' '}
				{
					<Link
						className={styles.bold}
						style={color}
						to="/personal">
						here
					</Link>
				}{' '}
				if you would like to learn more about me beyond my career!
			</Card.Text>
		</>
	);
}
