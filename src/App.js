import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landingPage/landing';
import List from './pages/listPage/list';
import Details from './pages/detailsPage/details';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import Compleated from './pages/completedPage/compleated';
import BlogPage from './pages/blogPage/blogPage';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { useDispatch } from 'react-redux';
import { fetchHouses } from './pages/redux/AsuncThunk';
import { useEffect } from 'react';
import Login from './pages/loginPage/login';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHouses())
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/list' element={<List />}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/checkout/:id' element={<CheckoutPage/>}/>
      <Route path='/checkout/:id/compleated/:id' element={<Compleated/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog/details/:id' element={<BlogDetails/>}/>
      <Route path='/aboutUs' element={<AboutUsPage/>}/>
      <Route path='/contacts' element={<ContactPage/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
  );
}

export default App;
