import './App.css';
import React from "react";
function App() {
  const initialvalue =
  {
    count: 0
  }
  function reducer(state, action) {
    switch (action) {
      case 'incriment':
        return { count: state.count + 1 }
      case 'dicriment':
        return { count: state.count - 1 }
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
      <h3>{state.count}</h3>
      <br />
      <button onClick={() => { dispatch('incriment') }}>incriment</button>
      <button onClick={() => { dispatch('dicriment') }}>incriment</button>
      <button onClick={() => { dispatch('reset') }}>Reset</button>


    </div>
  );
}

export default App;
