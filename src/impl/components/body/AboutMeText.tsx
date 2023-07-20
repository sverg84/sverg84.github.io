import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';

import MyName from '../../consts/MyName';
import PageColorContext from '../../contexts/PageColorContext';

export default function AboutMeText(): React.ReactElement<'Card.Text'> {
	const color = React.useContext(PageColorContext);

	const pageColorStyle: React.CSSProperties = {
		color,
		fontStyle: 'italic',
		fontWeight: 'bold',
	} as const;

	return (
		<Card.Text>
			Heylo, my name is <span style={pageColorStyle}>{MyName}</span>.
		</Card.Text>
	);
}
