import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [lights, setLights] = useState({
    red: 1,
    yellow: 0,
    green: 0,
  });

  const nextState = () => {
    setLights((prevState) => {
      const { red, yellow, green } = prevState;
      if (red === 1) {
        return { ...prevState, red: 0, green: 1 };
      } else if (yellow === 1) {
        return { ...prevState, red: 1, yellow: 0 };
      } else {
        return { ...prevState, yellow: 1, green: 0 };
      }
    });
  };

  return (
    <div className='traffic-light-box'>
      <h2>Functional Traffic Light</h2>
      <div className='traffic-light'>
        {/* Background color can be black | yellow | red | green */}
        {Object.entries(lights).map(([key, value]) => (
          <div key={key} className={`circle ${value ? key : 'black'}`}></div>
        ))}
      </div>
      <button onClick={nextState} className='next-state-button'>
        Next State
      </button>
    </div>
  );
};
