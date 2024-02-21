import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Speakers from './components/speakers';
import Sessions from './components/sessions';
import Location from './components/location';
import Sponsors from './components/sponsors';
import Organizers from './components/organizers';
import Facilitators from './components/facilitators';
import DevTeam from './components/devTeam';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Speakers/>
      <Sessions/>
      <Location/>
      <Sponsors/>
      <Organizers/>
      <Facilitators/>
      <DevTeam/>

    </div>
  );
}

export default App;
