import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LandingPage />} />
    )
  );

  return <RouterProvider router={router} />
}

export default App
