import styles from 'impl/styles/pageMargin.module.scss';
import * as React from 'react';

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function PageBody({children}: Props): React.JSX.Element {
	return <div className={styles.page}>{children}</div>;
}
