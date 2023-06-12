import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/layouts/navbar-component/Navbar';
import Accordion from '../pages/Accordion/Accordion';
import Form1 from '../pages/Form1/Form1';
import Form2 from '../pages/Form2/Form2';
import Form3 from '../pages/Form3/Form3';
import FormQuiz from '../pages/FormQuiz/FormQuiz';
import FormTicket from '../pages/FormTicket/FormTicket';
import Gallery from '../pages/Gallery/Gallery';
import Home from '../pages/Home/Home';
import LessonOne from '../pages/LessonOne/LessonOne';
import LessonTwo from '../pages/LessonTwo/LessonTwo';
import MemoryGallery from '../pages/MemoryGallery/MemoryGallery';
import Menssenger from '../pages/Menssenger/Menssenger';
import SimpleCounter from '../pages/SimpleCounter/SimpleCounter';
import TodoList from '../pages/TodoList/TodoList';
import Toolbar from '../pages/Toolbar/Toolbar';
import MovingDot from '../pages/MovingDot/MovingDot';
import Calculator from '../pages/Calculator/Calculator';
import MemoryGame from '../pages/MemoryGame/MemoryGame';

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson-one" element={<LessonOne />} />
        <Route path="/lesson-two" element={<LessonTwo />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/memory-gallery" element={<MemoryGallery />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />
        <Route path="/form-1" element={<Form1 />} />
        <Route path="/form-2" element={<Form2 />} />
        <Route path="/form-3" element={<Form3 />} />
        <Route path="/moving-dot" element={<MovingDot />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/form-quiz" element={<FormQuiz />} />
        <Route path="/form-ticket" element={<FormTicket />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/menssenger" element={<Menssenger />} />
        <Route path="/toolbar" element={<Toolbar />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/memory-game" element={<MemoryGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
