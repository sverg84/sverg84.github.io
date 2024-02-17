import * as React from 'react';
import Card from 'react-bootstrap/esm/Card';
import { useLocation } from 'react-router-dom';

type Props = Readonly<{
	children: React.ReactNode;
	id: string;
}>;

export default function BodyCardWrapper({
	children,
	id,
}: Props): React.JSX.Element {
	const ref = React.useRef<HTMLLIElement>(null);

	const {hash} = useLocation();

	React.useEffect(() => {
		if (hash.slice(1) === id && ref.current != null) {
			ref.current.scrollIntoView();
		}
	}, [hash]);

	return (
		<Card
			as="li"
			id={id}
			ref={ref}>
			{children}
		</Card>
	);
}
