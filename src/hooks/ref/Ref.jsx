import React from 'react'
import { useRef } from 'react'

/*
useRef creates a mutable reference that persists across re-renders.
It can be used to directly reference DOM elements or to store mutable values.
Changes to the value of a ref do not trigger a re-render.
Access the current value using myRef.current.
You can initialize a ref with useRef(initialValue).
*/

const Ref = () => {

    const lastPara = useRef();

    const moveDown = () =>{
        // console.log(lastPara.current);
        lastPara.current.scrollIntoView({ behavior: 'smooth', block : 'end' })
    }

    const firstPara = useRef();

    const moveUp = () =>{
        firstPara.current.scrollIntoView({ behavior: 'smooth', block : 'start' })
    }


  return (
    <>
      <h1 className="text-5xl text-gray-900 mb-3">Go to paragraphe</h1>
      <button ref={firstPara} onClick={moveDown} className=" mt-9 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Move down
        </span>
       </button>
      <div className='p-4'>
        <section className='flex justify-between m-5'>
            <img className='' src="https://picsum.photos/id/1/200/300" alt=""  />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo soluta eos, incidunt culpa, rem corrupti voluptas eaque, voluptatum aspernatur provident ipsam quae accusantium pariatur deleniti! Voluptatibus voluptatum architecto consequatur.</p>
        </section>
        <section className='flex justify-between m-5'>
            <img src="https://picsum.photos/id/2/200/300" alt=""  />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo soluta eos, incidunt culpa, rem corrupti voluptas eaque, voluptatum aspernatur provident ipsam quae accusantium pariatur deleniti! Voluptatibus voluptatum architecto consequatur.</p>
        </section>
        <section className='flex justify-between m-5'>
            <img src="https://picsum.photos/id/3/200/300" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo soluta eos, incidunt culpa, rem corrupti voluptas eaque, voluptatum aspernatur provident ipsam quae accusantium pariatur deleniti! Voluptatibus voluptatum architecto consequatur.</p>
        </section>
        <section className='flex justify-between m-5'>
            <img src="https://picsum.photos/id/4/200/300" alt=""  />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo soluta eos, incidunt culpa, rem corrupti voluptas eaque, voluptatum aspernatur provident ipsam quae accusantium pariatur deleniti! Voluptatibus voluptatum architecto consequatur.</p>
        </section>
        <section className='flex justify-between m-5'>
            <img src="https://picsum.photos/id/5/200/300" alt=""  />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo soluta eos, incidunt culpa, rem corrupti voluptas eaque, voluptatum aspernatur provident ipsam quae accusantium pariatur deleniti! Voluptatibus voluptatum architecto consequatur.</p>
        </section>
      </div>

      <button ref={lastPara} onClick={moveUp} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Move UP
        </span>
       </button>
    </>
  )
}

export default Ref
