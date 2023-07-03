import React, { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Reloj</h1>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}

export default Reloj; 