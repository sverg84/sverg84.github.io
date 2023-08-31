import classNames from 'classnames';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import MyName from '../../../consts/MyName';
import useColorStyle from '../../../hooks/useColorStyle';
import styles from '../../../styles/body/about/text.module.scss';

const BIRTHDATE: string = '1998-05-06';

function Language({language}: {language: string}): React.JSX.Element {
	const color = useColorStyle();
	return <span className={classNames(color, styles.bold)}>{language}</span>;
}

export default function AboutMeText(): React.JSX.Element {
	const color = useColorStyle();

	return (
		<>
			<Card.Text
				as="h2"
				className={classNames(color, 'text-center', 'text-xl-start')}>
				About Me
			</Card.Text>
			<Card.Text
				as="h6"
				className={classNames(styles.italic, 'text-center', 'text-xl-start')}>
				Front-End Software Engineer, Web Developer
			</Card.Text>
			<Card.Text>
				Hi there! My name is{' '}
				<span className={classNames(color, styles.bold, styles.italic)}>
					{MyName}
				</span>
				. I am a{' '}
				{
					<Moment
						date={BIRTHDATE}
						durationFromNow={true}
						format="yy"
					/>
				}{' '}
				year-old software engineer with a fondness for user interface and user
				experience (UI/UX) development.
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
						className={classNames(color, styles.bold)}
						to="/personal">
						here
					</Link>
				}{' '}
				if you would like to learn more about me beyond my career!
			</Card.Text>
		</>
	);
}
