
import './App.css';

import Dash from './elements/dashboard/Dash';
import Timezone from './elements/timezone/Timezone'; 
import StackSlider from './elements/iconSliders/StackSlider';
import TechSlider from './elements/iconSliders/TechSlider';
import Canvas from './elements/iframeGhub/iframeGhub';

function App() {
  

  return (
    <>
    <div id="backgroundWrap">
      <div className="halftone"></div>
      <div className="bgColor"></div>
    </div>
    
    <div id='app'>
      
      <Dash />
      <StackSlider />
      <TechSlider />
      <Canvas />
    </div>  
    </>
  )
}

export default App;
