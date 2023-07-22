import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Moment from 'react-moment';

import MyName from '../../../consts/MyName';
import PageColorContext from '../../../contexts/PageColorContext';

const BIRTHDATE: string = "05/06/1998";

const heading: React.CSSProperties = {
	fontSize: 32,
} as const;

export default function AboutMeText(): React.JSX.Element {
	const color = React.useContext(PageColorContext);

	const pageColorStyle: React.CSSProperties = {
		color,
		fontStyle: 'italic',
		fontWeight: 'bold',
	} as const;

	return (
		<>
            <Card.Text style={heading}>About Me</Card.Text>
			<Card.Text>
				Heylo, my name is <span style={pageColorStyle}>{MyName}</span>.
                I am {<Moment date={BIRTHDATE} durationFromNow={true} format="yy" />} years old.
			</Card.Text>
		</>
	);
}
