import React from 'react'
import spacejam from '../images/spacejam.png';
import bball from '../images/bball.png';
import bplanet from '../images/bplanet.png';
import erf from '../images/erf.png';
import jjam from '../images/jjam.png';
import mars from '../images/mars.png';
import metro from '../images/metro.png';
import saturn from '../images/saturn.png';


export default function PlanetNav() {
  return (

    <div className="planet-Menu-grid">
   
      <div className="div1">
      <img  id="spacejam" src={spacejam}/> 
      </div>

      <div className="div2">
      <img  id="bball" src={bball}/> 
      </div>


      <div className="div3">
        nothing here 
      </div>
     
     
      <div className="div4">
      <img id="jjam" src={jjam} />   
      </div>
     
      
      <div className="div5">
      <img id="mars" src={mars} /> 
      </div>

       
      <div className="div6">
      <img id="earth" src={erf} />
      </div>

      
      <div className="div7"> 
      <img id="bplanet" src={bplanet} /> 
      </div>

      <div className="div8"> 
      <img id="metro" src={metro} /> 
      </div>
    
      
      <div className="div9" >
      <img id="saturn" src={saturn} /> 
      </div>


    </div>
  )
}