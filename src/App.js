import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Notepad from './components/Notepad';
import About from './components/About';

function App() {
  return (
   <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Notepad />} />
        <Route path='/about' element={<About />} />
      </Routes>
        
    </BrowserRouter>
   </>

  );
}
export default App;
