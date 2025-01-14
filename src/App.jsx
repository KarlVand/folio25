
import './assets/css/App.css';

import Dash from './elements/Dash';
import Timezone from './elements/Timezone'; 
import StackSlider from './elements/StackSlider';
import TechSlider from './elements/TechSlider';


function App() {
  

  return (
    <>
    <div id="backgroundWrap">
      <div className="halftone"></div>
      <div className="bgColor"></div>
    </div>
    
    <div id='app'>
      
      <Timezone />
      <Dash />
      <StackSlider />
      <TechSlider />
    </div>  
    </>
  )
}

export default App;
