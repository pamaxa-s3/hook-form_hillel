import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@lay/MainLayout';
import Home from '@pages/Home';
import RegistrationForm from '@pages/Registration';
import NotFound from '@pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'registration', element: <RegistrationForm /> },
			{ path: '*', element: <NotFound /> }
		]
	}
]);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
