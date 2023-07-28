import classNames from 'classnames';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Moment from 'react-moment';

import MyName from '../../../consts/MyName';
import useColorStyle from '../../../hooks/useColorStyle';
import styles from '../../../styles/body/about/text.module.css';

const BIRTHDATE: string = '1998-05-06';

function Language({
	color,
	language,
}: {
	color: string;
	language: string;
}): React.JSX.Element {
	return <span className={classNames(color, styles.bold)}>{language}</span>;
}

export default function AboutMeText(): React.JSX.Element {
	const color = useColorStyle();

	return (
		<>
			<Card.Text
				as="h2"
				className={classNames(
					color,
					styles['xs-center'],
					'text-sm-center',
					'text-md-center',
					'text-lg-center',
					'text-xl-start',
				)}>
				About Me
			</Card.Text>
			<Card.Text
				as="h6"
				className={classNames(
					styles.italic,
					styles['xs-center'],
					'text-sm-center',
					'text-md-center',
					'text-lg-center',
					'text-xl-start',
				)}>
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
				took an introduction course to Java on a whim, and I loved learning as
				much as I could since then! Throughout my time at university, I applied
				myself to a substantial amount of coursework in{' '}
				{
					<Language
						color={color}
						language="C++"
					/>
				}{' '}
				and{' '}
				{
					<Language
						color={color}
						language="Python"
					/>
				}{' '}
				with a splash of{' '}
				{
					<Language
						color={color}
						language="JavaScript"
					/>
				}
				,{' '}
				{
					<Language
						color={color}
						language="OCaml"
					/>
				}
				, and{' '}
				{
					<Language
						color={color}
						language="C#"
					/>
				}
				.
			</Card.Text>
			<Card.Text>
				All of my full-time experience (as of Summer 2023) stems from my time at
				Meta where I challenged myself further in exploring web programming,
				learning{' '}
				{
					<Language
						color={color}
						language="PHP"
					/>
				}{' '}
				and{' '}
				{
					<Language
						color={color}
						language="React"
					/>
				}{' '}
				for the first time in a rigorous, fast-paced environment.
			</Card.Text>
			<Card.Text>
				Since parting with Meta, I have been self-teaching{' '}
				{
					<Language
						color={color}
						language="TypeScript"
					/>
				}{' '}
				in order to keep my UI-building skills fresh, replete with{' '}
				{
					<Language
						color={color}
						language="CSS"
					/>
				}{' '}
				modules.
			</Card.Text>
		</>
	);
}
