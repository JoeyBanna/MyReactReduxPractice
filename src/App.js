import { useSelector,useDispatch } from 'react-redux';

function App() {


  let counter =useSelector((state)=>state.counter);
const dispatch = useDispatch();
  const increment=()=>{
  dispatch({type:'INC'})
     }
  const decrement=()=>{
     dispatch({type:'DIC'})
     }
     const add=()=>{
      dispatch({type:'add', payload:10})
     }

  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Add</button>
      <br/>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}>By 10</button>
    </div>
  );
}

export default App;
