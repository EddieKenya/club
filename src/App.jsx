import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Reservation from './components/Reservation';
import Enquiry from './components/Enquiry'; // Import the new section

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Events />
      <Reservation />
      <Enquiry /> {/* Added the Enquiry section here */}
    </div>
  );
}

export default App;