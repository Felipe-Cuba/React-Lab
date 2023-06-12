import React from 'react';
import GalleryComponent from '../../components/gallery-component/gallery-component';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <GalleryComponent />
      </div>
      <div className="button-right">
        <Link to="/todolist" className="button-link">
          TodoList
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
