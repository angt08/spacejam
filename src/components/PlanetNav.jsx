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

    <div className="planet-menu-grid">
   
      <div className="div1">
      <img  id="spacejam" src={spacejam}alt="space jam"/> 
      </div>

      <div className="div2">
      <img  id="bball" src={bball} alt="basket ball"/> 
      </div>


      <div className="div3">
       
      </div>
     
     
      <div className="div4">
      <img id="jjam" src={jjam} alt="junior jams" />   
      </div>
     
      
      <div className="div5">
      <img id="mars" src={mars} alt="mars" /> 
      </div>

       
      <div className="div6">
      <img id="earth" src={erf} alt="earth" />
      </div>

      
      <div className="div7"> 
      <img id="bplanet" src={bplanet} alt="blue planet" /> 
      </div>

      <div className="div8"> 
      <img id="metro" src={metro} alt="metro" /> 
      </div>
    
      
      <div className="div9" >
      <img id="saturn" src={saturn} alt="saturn" /> 
      </div>


    </div>
  )
}