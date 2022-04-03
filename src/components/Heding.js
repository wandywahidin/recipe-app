import React from 'react'

const Heding = ({propsSearch, propsFunctionSearch, propsSubmit}) => {
  return (
    <div className='text-center mt-3'>
        <h2>MANGANSE</h2>
        <h5>Search Your Food</h5>
        <form onSubmit={propsSubmit}>
            <input  onChange={propsFunctionSearch} type='search' placeholder='Input Food Name' className='p-1' value={propsSearch} ></input>
            <button type='submit' className='btn btn-secondary p-1 mx-2 rounded shadow-lg border-dark'>Search</button>
        </form>
    </div>
  )
}

export default Heding