import React from 'react';
import ReactDom from 'react-dom/client';

import App from './components/app/app';

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(<App />);
