import React, {useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import './App.css';


function App() {
  const isActiveMenue=false;
  return (
    <div >
      <BrowserRouter>
       <div className='flex relative dark:bg-main-dark-bg'>
       
         <div className='fixed right-4 bottom-4 z-10'>
           <TooltipComponent content="Settings" postion="top">
             <button>
                <FiSettings />
             </button>
           </TooltipComponent>
         </div>
          {/* sidebar */}
          {isActiveMenue?
           (<div className='fixed w-72 bg-white sidebar'>
                 Sidebar
           </div> )
          :
          
          (<div className='fixed w-0 bg-white sidebar'>
          Sidebar
          </div>)}
        {/* sidebar */}


       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
