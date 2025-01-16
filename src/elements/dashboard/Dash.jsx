import React from 'react';

import './dash.css';

function Dash() {
  return ( 
    <div id="dash">
      <div id="dashWrap">
        <div id="dashTitle">
          <h1>Hi, I'm <span className="highlight">Karl</span></h1>
          <h2>Front-End Developer</h2>
        </div>
        <div id="dashContent">
          <p>with a passion for creating 
            <br></br><span>beautiful</span> and functional websites.
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dash;