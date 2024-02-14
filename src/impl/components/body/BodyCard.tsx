import * as React from 'react';
import Card from 'react-bootstrap/Card';

import useColorStyle from '../../hooks/useColorStyle';
import styles from '../../styles/body/experience/card.module.scss';

type Props = Readonly<{
	children: React.JSX.Element;
	id?: string;
	title: string;
}>;

export default function BodyCard({
	children,
	id,
	title,
}: Props): React.JSX.Element {
	const color = useColorStyle();

	return (
		<Card id={id}>
			<Card.Header as="header">
				<h2
					className={styles.header}
					style={color}>
					{title}
				</h2>
			</Card.Header>
			<Card.Body as="section">{children}</Card.Body>
		</Card>
	);
}
