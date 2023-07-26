import classNames from 'classnames';
import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Moment from 'react-moment';

import MyName from '../../../consts/MyName';
import useColorStyle from '../../../hooks/useColorStyle';
import textStyles from '../../../styles/body/about/text.module.css';

const BIRTHDATE: string = '1998-05-06';

export default function AboutMeText(): React.JSX.Element {
	const color = useColorStyle();

	return (
		<>
			<h2 className={color}>About Me</h2>
			<Card.Text>
				Heylo, my name is{' '}
				<span className={classNames(color, textStyles.name)}>{MyName}</span>. I
				am{' '}
				{
					<Moment
						date={BIRTHDATE}
						durationFromNow={true}
						format="yy"
					/>
				}{' '}
				years old.
			</Card.Text>
		</>
	);
}
