import React from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from './components/App';
import './globalVariables.css';

const root = createRoot(document.getElementById('root'));

const content = React.createElement('div', {
  initial: 'hi',
  children: 'Hello',
});

console.log('content', content.props);

root.render(
  <React.StrictMode>
    {/* {content} */}
    <App />
  </React.StrictMode>
);
