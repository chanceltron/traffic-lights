import { useReducer } from 'react';

type LightState = {
  red: number;
  yellow: number;
  green: number;
};

type LightAction = { type: 'NEXT' };

const initialState = {
  red: 1,
  yellow: 0,
  green: 0,
};

const lightReducer = (state: LightState, action: LightAction) => {
  switch (action.type) {
    case 'NEXT':
      if (state.red === 1) {
        return { red: 0, yellow: 0, green: 1 };
      } else if (state.yellow === 1) {
        return { red: 1, yellow: 0, green: 0 };
      } else {
        return { red: 0, yellow: 1, green: 0 };
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const FunctionalTrafficLight = () => {
  const [lights, dispatch] = useReducer(lightReducer, initialState);

  const nextState = () => {
    dispatch({ type: 'NEXT' });
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
