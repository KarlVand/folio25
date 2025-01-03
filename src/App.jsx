
import './assets/css/App.css';

import StackSlider from './elements/StackSlider';
import TechSlider from './elements/TechSlider';
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
      <StackSlider />
      <TechSlider />
    </div>  
    </>
  )
}

export default App
