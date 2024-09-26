import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'macro-css';

import App from './App';
import Favourite from './pages/Favourite';
import Profile from './pages/Profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/favourite', element: <Favourite /> },
			{ path: '/profile', element: <Profile /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
