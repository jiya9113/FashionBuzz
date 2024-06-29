import logo from './logo.svg';
import { Routes, Route } from 'react-router';

import './App.css';

import Navbar from './components/navbar';
import ProfilePage from './components/profilePage';
import Scroll from './components/scroll';
import OutfitOfTheDay from './components/outfitOfTheDay';
import EventsPage from './components/eventsPage';


function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<ProfilePage/>}/>
        <Route path='posts' element={<Scroll/>}/>
        <Route path='ootd' element={<OutfitOfTheDay/>}/>
        <Route path='events' element={<EventsPage/>}/>
      </Route>
    </Routes>
  );

}

export default App;