
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Recruiter from './component/Recruiter';
import Job from './component/Jobs';
import About from './component/About';
import Navbar from './component/Navbar';
import Apply from './component/Apply';


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/recruiter' element = {<Recruiter/>} />
    <Route path='/job' element = {<Job/>}/>
    <Route path='/about' element = {<About/>}/>
    <Route path='/job:apply' element = {<Apply/>}/>
  </Routes>
  </div>
  );
}

export default App;
