import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import RegistrationForm from '@pages/Registration';
import NotFound from '@pages/NotFound';
import SuccessPage from '@pages/SuccessPage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'registration', element: <RegistrationForm /> },
			{ path: 'success', element: <SuccessPage /> },
			{ path: '*', element: <NotFound /> }
		]
	}
]);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
