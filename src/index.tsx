import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import styles from './impl/styles/index.module.scss';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement == null) {
	throw new Error('Failed to find root element');
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				lazy={async () => await import('./impl/components/AppJobSeeker')}
				path="/"
			/>
			,
			<Route
				lazy={async () => await import('./impl/components/AppPersonal')}
				path="/personal"
			/>
		</>,
	),
);

root.render(
	<React.StrictMode>
		<RouterProvider
			fallbackElement={
				<div className={styles.fallback}>
					<Spinner variant="primary" />
				</div>
			}
			router={router}
		/>
	</React.StrictMode>,
);
