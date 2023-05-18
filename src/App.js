import logo from './logo.svg';
import './App.css';

import Navbar from './components/inc/Navbar';

import Home from './components/pages/Home';
import Aboutus from './components/pages/About';
import Contactus from './components/pages/Contact';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/about' element={<Aboutus />}>
      </Route>
      <Route path='/contact' element={<Contactus />}>
      </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
