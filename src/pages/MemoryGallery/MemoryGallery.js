import React from 'react';
import { Link } from 'react-router-dom';
import MemoryGalleryComponent from '../../components/memory-gallery-component/memory-gallery-component';

export default function MemoryGallery() {
  return (
    <div className="lesson-container">
      <div className="lesson-content">
        <MemoryGalleryComponent />
      </div>
      <div className="button-container">
        <Link to="/toolbar" className="button-link">
          Toolbar
        </Link>
        <Link to="/simple-counter" className="button-link">
          Counter
        </Link>
      </div>
    </div>
  );
}
