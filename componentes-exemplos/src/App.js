// import logo from './logo.svg';
import './App.css';

import doctor from './assets/images/doctor.jpg';
import luffy from './assets/images/luffy.jpg';

import Gallery from './components/gallery-component/gallery-component';
import Profile from './components/profile-component/profile-component';
import TodoList from './components/todoList-component/todoList-component';
import PackingList from './components/packing-list-component/packing-list-component';
import List from './components/list-component/list-component';
import TeaGathering from './components/tea-gathering-component/tea-gathering-component';

const today = new Date();

const luffyPerson = {
  name: 'Luffy',
  listColor: {
    color: '#fff',
  },
};

const gal = {
  name: 'Gal-Sal',
  imageId: 'U8RDuHh',
  theme: {
    border: '2px solid #ffcb5b',
  },
};

const people = [
  {
    id: 1,
    name: 'Goku',
    profession: 'Saiyan',
    accomplishment: 'Defeating Frieza, Cell and Buu',
    imageId: 'BUOCWoH',
  },
  {
    id: 2,
    name: 'Naruto Uzumaki',
    profession: 'Ninja',
    accomplishment:
      'Saving the world from Kaguya and stopping Obito and Madara',
    imageId: 'plnVK1N',
  },
  {
    id: 3,
    name: 'Monkey D. Luffy',
    profession: 'Pirate',
    accomplishment: 'Being one of the four emperors of the sea',
    imageId: 'ggsMLFB',
  },
  {
    id: 4,
    name: 'Ichigo Kurosaki',
    profession: 'Soul Reaper',
    accomplishment: 'Defeating Aizen and saving the Soul Society',
    imageId: '41KZV4C',
  },
  {
    id: 5,
    name: 'Edward Elric',
    profession: 'Alchemist',
    accomplishment:
      "Finding the Philosopher's Stone and restoring his brother's body",
    imageId: 'TW9YMJS',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Me</h1>
      <Profile image={doctor} alt="doctor" />
      <div className="container">
        <Gallery />
      </div>

      <div className="container">
        <TodoList
          avatar={luffy}
          alt="Luffy"
          person={luffyPerson}
          date={today}
        />
      </div>

      <div className="container">
        <Profile person={gal} />
      </div>

      <div className="container">
        <PackingList />
      </div>

      <div className="container-list">
        <List people={people} />
      </div>

      <div className="container">
        <h1 className="title"> Tea Gathering component</h1>
        <TeaGathering />
      </div>
    </div>
  );
}

export default App;
