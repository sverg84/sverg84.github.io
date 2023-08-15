import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppJobSeeker from './impl/components/AppJobSeeker';
import AppPersonal from './impl/components/AppPersonal';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement == null) {
	throw new Error('Failed to find root element');
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					element={<AppJobSeeker />}
					path="/"
				/>
				<Route
					element={<AppPersonal />}
					path="/personal"
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
