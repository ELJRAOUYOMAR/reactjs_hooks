import React, { useState } from 'react'
import { useMemo } from 'react'

/*
useMemo is a React Hook that is used to memoize the result of a function call and cache it. It helps 
optimize performance by preventing expensive calculations from being re-executed on every render if the
inputs haven't changed. It is particularly useful when dealing with complex computations or calculations
within functional components.

*Tips for Using useMemo:
-Identify Expensive Operations: Use useMemo for functions that perform expensive operations, such as heavy computations, complex data transformations, or costly API requests.
-Choose Dependencies Carefully: Make sure to include all dependencies in the dependency array that might affect the result of the memoized function. Missing dependencies can lead to unexpected behavior.
-Don't Overuse: While useMemo can improve performance, overusing it can lead to unnecessary complexity. Only apply it when there's a noticeable performance gain.
-Benchmark: Measure the performance impact of useMemo in your application to ensure it provides the expected optimization.
-By leveraging useMemo, you can efficiently optimize the performance of your React components by memoizing expensive computations and preventing unnecessary renders.
*/

const Memo = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const changeOne = () => setCounterOne(prev => prev + 1)
    const changeTwo = () => setCounterTwo(prev => prev + 1)

    // const isEven = () =>{ 
    //     let i;
    //     // this line of code just for decrement the speed(the function is called slowly(takes more time)), when click on other button or do any thing in this component the functions called slowly, for this we use useMemo for perform expensive operations
    //     while (i < 200000) i++;
    //     return counterOne % 2 === 0}

    const isEven = useMemo(
        () =>{ 
                let i;
                while (i < 80000000000000000000000009) i++;
                return counterOne % 2 === 0}
        ,[counterOne]
        )
  return (
    <>
    <button onClick={changeOne} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-3">{counterOne}</button>
    {/* don't useMemo */}
    {/* {isEven() ? "Even" : "Odd"} */}
    {/* using Memo */}
    {isEven ? "Even" : "Odd"}
    <button onClick={changeTwo} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-3">{counterTwo}</button>


    </>
  )
}

export default Memo