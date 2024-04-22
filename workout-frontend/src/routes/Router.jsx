import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth.js';

import NotFound from '../components/screens/NotFound/NotFound.jsx';

import { routes } from './routes.data.js';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
