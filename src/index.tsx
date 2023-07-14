import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement == null) {
    throw new Error('Failed to find root element');
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
