import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
    } from 'react-router-dom'
import NavBar from './layout/MainLayout'
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import PageNotFound from './pages/PageUnderMaintenance';
import MovieList from './pages/Moviepage'
import EventPage from './pages/EventPage';

const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path='/' element={<NavBar />}> 
                <Route index element = {<Homepage />}/>
                <Route path='/login' element = {<Loginpage />}/>
                <Route path='/Moviepage' element = {<MovieList />}/>
                <Route path='/EventPage' element = {<EventPage />}/>
                <Route path='*' element = {<PageNotFound />}/>
          </Route>
 )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App
