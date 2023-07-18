import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement == null) {
    throw new Error('Failed to find root element');
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
