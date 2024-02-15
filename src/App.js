import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import { Projects } from './components/Projects';
import PopupMsg from './components/PopupMsg';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/skill" element={<Skills/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Projects/>}/>
  <Route path='/education' element={<Education/>}/>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter> 
  <PopupMsg/></div>
  );
}

export default App;
