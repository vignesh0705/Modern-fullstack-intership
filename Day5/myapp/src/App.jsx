import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Suspense, lazy} from 'react';
// import User from './components/User';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';
// import Userdetail from './components/Userdetail';
const User = lazy(() => import('./components/User'));
const Navbar = lazy(() => import('./components/Navbar'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Userdetail = lazy(() => import('./components/Userdetail'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<Userdetail />} />
      </Routes>
      </Suspense>
      {/* <div className='footer'>
        <p>© 2025 My App. All rights reserved.</p>
      </div> */}
    </BrowserRouter>
  )
}

export default App;
