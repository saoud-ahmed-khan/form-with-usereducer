import './App.css';
import React from "react";
function App() {
  const initialvalue =
  {
    count1: 0,
    count2:0
  }
  function reducer(state, action) {
    switch (action) {
      case 'incriment1':
        return { count: state.count1 + 1 }
      case 'dicriment1':
        return { count: state.count1 - 1 }
        case 'incriment2':
        return { count: state.count2 + 1 }
      case 'dicriment2':
        return { count: state.count2 - 1 } 
      case 'reset':
        return { count: 0 }

      default:
        return state.count
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialvalue)
  console.log(state);
  return (
    <div className="App">
      <h3>{state.count1}</h3>
      <h3>{state.count2}</h3>
      <br />
      <button onClick={() => { dispatch('incriment1') }}>incriment 1</button>
      <button onClick={() => { dispatch('dicriment1') }}>dincriment 1</button>
      <button onClick={() => { dispatch('incriment2') }}>incriment 1</button>
      <button onClick={() => { dispatch('dicriment2') }}>dincriment 1</button>
      <button onClick={() => { dispatch('reset') }}>Reset</button>


    </div>
  );
}

export default App;
