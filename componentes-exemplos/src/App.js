// import logo from './logo.svg';
import './App.css';

import doctor from './assets/images/doctor.jpg';

import Gallery from './components/gallery-component/gallery-component';
import Profile from './components/profile-component/profile-component';

function App() {
  return (
    <div className="App">
      <h1>Me</h1>
      <Profile image={doctor} alt="doctor" />
      <header className="App-header">
        <Gallery />
      </header>
    </div>
  );
}

export default App;
