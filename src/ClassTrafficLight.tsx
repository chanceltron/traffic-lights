import { Component } from 'react';

export class ClassTrafficLight extends Component {
  state = {
    red: 1,
    yellow: 0,
    green: 0,
  };

  lightSwitch = () => {
    if (this.state.red === 1) {
      this.setState({
        red: 0,
        green: 1,
      });
    } else if (this.state.yellow === 1) {
      this.setState({
        yellow: 0,
        red: 1,
      });
    } else if (this.state.green === 1) {
      this.setState({
        green: 0,
        yellow: 1,
      });
    }
  };

  render() {
    return (
      <div className='traffic-light-box'>
        <h2>Class Traffic Light</h2>
        <div className='traffic-light'>
          {/* Background color can be black | yellow | red | green */}
          {Object.entries(this.state).map(([key, value]) => {
            return <div key={key} className={`circle ${value === 1 ? key : 'black'}`}></div>;
          })}
          {/* <div className='circle red'></div>
          <div className='circle black'></div>
          <div className='circle black'></div> */}
        </div>
        <button onClick={this.lightSwitch} className='next-state-button'>
          Next State
        </button>
      </div>
    );
  }
}
