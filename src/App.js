import './App.css';
import PlanetNav from './components/PlanetNav';
import stars from './media/stars.mp4';

function App() {
  return (
    <>
      <div className="wrapper">
      <PlanetNav />
        

      


        <video
        id="stars" autoPlay loop muted>
        <source
        src={stars}
        type="video/mp4" />
       </video>   
      
        </div>

    </>
  );
}

export default App;
