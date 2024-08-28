import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
           <Route  path="/" element={<Home/>}/>
    {/* <div className='text-center text-2xl'>Homeeeeeeeeeeeeeeeeeeeeeeeeeeee</div> */}


     </Routes> 
  );
}

export default App;
