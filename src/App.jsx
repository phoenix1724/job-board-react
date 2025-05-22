
import './App.css'
<<<<<<< HEAD
import Navbar from './components/Navbar';

// const App = () => {
  
//   return (
//      <div><Navbar />
//      <h1>Jobify App</h1>
//      </div>
//   )
  
// };
// export default App;




import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Profile,
  Admin,
  Stats
 } from './pages';
 const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          { path: 'stats', element: <Stats /> },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
    ],
  },
 ]);
 const App = () => {
  // return <RouterProvider router={router} />;
  return (
    
    <div>
      <RouterProvider router={router} />
      <Navbar />
      <h1>Jobify App</h1>
    </div>
  )
 };
 export default App;
=======
import Navbar from './Navbar';
function App(){
  return(
    <div>
      <Navbar />
      <h1>Welcome to job board !</h1>
      <p>Find and apply to your dream tech job today.</p>
    </div>
  )
}



export default App;
>>>>>>> 6d40e9fda32cca0dd4c421f191ee6de89d14b19c
