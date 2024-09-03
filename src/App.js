import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Give from './pages/give/Give';

function App() {
  return (
    <Routes>
           <Route  path="/" element={<Home/>}/>
           <Route  path="/give" element={<Give/>}/>
    {/* <div className='text-center text-2xl'>Homeeeeeeeeeeeeeeeeeeeeeeeeeeee</div> */}


     </Routes> 
  );
}

export default App;
