import React, { useRef, useEffect } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'black';
    context.lineCap = 'round';
    context.lineWidth = 3;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      isDrawing = true;
      const x =
        e.clientX || e.touches[0].pageX - e.touches[0].target.offsetLeft;
      const y = e.clientY || e.touches[0].pageY - e.touches[0].target.offsetTop;
      [lastX, lastY] = [x, y];
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const x =
        e.clientX || e.touches[0].pageX - e.touches[0].target.offsetLeft;
      const y = e.clientY || e.touches[0].pageY - e.touches[0].target.offsetTop;
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
      [lastX, lastY] = [x, y];
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', stopDrawing);
      canvas.removeEventListener('touchcancel', stopDrawing);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={330}
      height={150}
      style={{ borderStyle: 'solid', borderRadius: '10px' }}
    ></canvas>
  );
};

export default Canvas;
