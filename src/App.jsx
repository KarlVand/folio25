
import './assets/css/App.css';

import Timezone from './elements/Timezone'; 

function App() {
  

  return (
    <>
    <div id="backgroundWrap">
      <div className="halftone"></div>
      <div className="bgColor"></div>
    </div>
    
    <div id='app'>
      <Timezone />
    </div>
    
      
     
    </>
  )
}

export default App
