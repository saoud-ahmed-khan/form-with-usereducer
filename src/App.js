import './App.css';
import React from "react";
function App() {
  const initialvalue =
  {
    count1: 0,
    count2:0
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'incriment1':
        return { ...state ,count1: state.count1 + action.payload}
      case 'dicriment1':
        return {...state , count1: state.count1 - action.payload }
        case 'incriment2':
        return {...state , count2: state.count2 + action.payload }
      case 'dicriment2':
        return { ...state ,count2: state.count2 - action.payload } 
      case 'reset':
        return { }

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
      <button onClick={() => { dispatch({type:'incriment1', payload:10}) }}>incriment by 10</button>
      <button onClick={() => { dispatch({type:'dincriment1', payload:10}) }}>dincriment by 10</button>
      <button onClick={() => { dispatch({type:'incriment2', payload:1}) }}>incriment2 by 1</button>
      <button onClick={() => { dispatch({type:'dincriment1', payload:1}) }}>dincriment2 by 1</button>
      <button onClick={() => { dispatch('reset') }}>Reset</button>


    </div>
  );
}

export default App;
