import React, {useReducer} from 'react'

const Reducer = () => {

    // Reducer declaration
    // const [state, dispatch] = useReducer(reducer, initState)  where state and initState are variables and dispatch and reducer are functions 

    const initState = {count : 0};

    const reducer = (state,action) =>{
      switch(action.type){
        case 'increment': return {count : state.count + 1};
        case 'decrement': return {count : state.count - 1};
        case 'reset': return {count : 0};
        default: return state;
      }
    }
    const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <p className="text-5xl text-gray-900 mb-3">{state.count}</p>
      <button type="button" onClick={()=>{dispatch({type: 'increment'})}} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Increment</button>
      <button type="button" onClick={()=>{dispatch({type: 'decrement'})}} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Decrement</button>
      <button type="button" onClick={()=>{dispatch({type: 'reset'})}} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset</button>
    </>
  )
}

export default Reducer


/*
const [state, dispatch] = useReducer(reducer, initState) 
where
state: This variable represents the current state managed by the useReducer hook. In the context of the example, state holds the current count value.

dispatch: This is a function provided by useReducer that allows components to dispatch actions to update the state. It sends an action object to the reducer function, which in turn specifies how the state should be updated. In our example, dispatch is used to increment or decrement the count value.

useReducer: This is the React hook itself, used to manage state in functional components. It takes two parameters:

reducer: This is a function that specifies how state updates should be handled. It receives the current state and an action object, and returns the new state based on the action type.
initState: This parameter represents the initial state of the component. It is the starting point for the state managed by the reducer function.

*/