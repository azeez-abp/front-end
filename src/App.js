import React, {useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import Login from './components/Login';

import './App.css';

// const Login  = ()=><h2>Login</h2>
const Dashboard  = ()=><h2>Dashboard</h2>
function App() {
  const isActiveMenue=false;
  let data  = null
  setTimeout(()=>{
    console.log("First time out")
},0)
let  updater  = async()=>{
  let   p   = await new Promise((res,rej)=>{
         setTimeout(()=>{
             data  = {name:"cdfds",br:"ifjelff"}
             res({data})   
         },0)
   
       

    });
    return p
}  
 updater().then(d=>{
  console.log(d)
 })

console.log(data,updater())





  return (
   
   <div >
      <BrowserRouter>
       <div className='flex relative '>
       
         <div className="fixed right-4 bottom-4 z-10 dark:bg-main-dark-bg">
           
             <button className='hover:bg-sky-600 text-white bg-main-dark-bg'>
                <FiSettings />
             </button>
   
          
         </div>
          {/* sidebar */}
           <Routes >
             <Route exact path="/"  element={<Login />} />
             <Route path="/login"  element={<Login />} />
             <Route path="/dashboard"  element={<Dashboard />} />
           </Routes>
            
        {/* sidebar */}


       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
