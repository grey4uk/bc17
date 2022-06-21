import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

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
