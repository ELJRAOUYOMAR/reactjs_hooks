import React, { useReducer, useState } from 'react';
import { XIcon } from '@heroicons/react/outline'; // Importing close icon from Heroicons

const Reducer2 = () => {

    // Define initial state for the form fields
    const initState = {
        username: 'ahmed',
        email: '',
        note: '',
    };

    // Define reducer function to manage state changes
    const reducer = (state, action) => {
        switch (action.type) {
            // Update state with new input values
            case 'input':
                return { ...state, [action.field]: action.value };
            // Reset state to initial values
            case 'reset':
                return initState;
            default:
                return state;
        }
    };

    // Use useReducer hook to manage state
    const [state, dispatch] = useReducer(reducer, initState);
    
    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);

    // Event handler for input changes
    const handleChange = (e) => {
        dispatch({ type: 'input', value: e.target.value, field: e.target.name });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log(state);
        // We can use this state for backend submission
        setShowModal(true); // Set showModal to true when form is submitted
    };

    // Event handler for resetting the form
    const handleReset = () => {
        dispatch({ type: 'reset' });
        setShowModal(false); // Hide the modal when form is reset
    };

    return (
        <>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Form Submitted</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Username : {state.username}</p>
                                            <p className="text-sm text-gray-500">Email : {state.email}</p>
                                            <p className="text-sm text-gray-500">Note : {state.note}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => setShowModal(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full max-w-xs m-auto mt-28">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        {/* Input field for username */}
                        <input
                            onChange={handleChange}
                            value={state.username}
                            name='username'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        {/* Input field for email */}
                        <input
                            onChange={handleChange}
                            value={state.email}
                            name='email'
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-6">
                        {/* Textarea for note */}
                        <textarea
                            onChange={handleChange}
                            value={state.note}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="note"
                            id=""
                            placeholder='Note'
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* Submit button */}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                        {/* Reset button */}
                        <button
                            onClick={handleReset}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Reducer2;
