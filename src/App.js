import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}>  </Route>
        <Route path='/home' element={<Home/>}>  </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
