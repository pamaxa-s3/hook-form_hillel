import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import '@styles/variables.css';
import '@styles/form.css';
import '@styles/stepper.css';
import '@styles/responsive.css';


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
);
