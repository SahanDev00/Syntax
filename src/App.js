import './App.css';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Projects from './Pages/Projects';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App bg-gradient-to-tr from-[#9400FF] to-[#27005D] duration-300 dark:bg-gradient-to-tl dark:from-[#240750] dark:to-[#030637]">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/Contact' element={<ContactPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
