import { useState, useEffect, useRef } from 'react';

export default function MovingDotComponent() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (e) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const maxX = containerWidth - 10; // Subtract the dot size
      const maxY = containerHeight - 10; // Subtract the dot size

      // Keep the dot within the container bounds
      const clampedX = Math.max(0, Math.min(x, maxX));
      const clampedY = Math.max(0, Math.min(y, maxY));

      setPosition({ x: clampedX, y: clampedY });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '300px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#abcde6',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
