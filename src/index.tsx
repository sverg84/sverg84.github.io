import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './impl/components/App';

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
					element={<App />}
					path="/"
				/>
        <Route element={<h2>Test</h2>} path="/2nd" />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
