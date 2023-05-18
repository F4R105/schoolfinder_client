import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Matches() {
  const {state} = useLocation()
  const navigate = useNavigate()
  // const {query} = state

  return (
    <main id="matches">
      <div className="container">
        <div id="schools_container">
          <button
            className="school"
            onClick={() => navigate('/school', {state: {school: 'schoolobject'}})}
          >
            <div className='school_info'>
              <div className="school_image">IMAGE</div>
              <div>
                <div className="school_name">Arusha technical college</div>
                <div className='school_level'>Primary</div>
              </div>
            </div>
            <span>Arrow</span>
          </button>
          <button
            className="school"
            onClick={() => navigate('/school', {state: {school: 'schoolobject'}})}
          >
            <div className='school_info'>
              <div className="school_image">IMAGE</div>
              <div>
                <div className="school_name">Arusha technical college</div>
                <div className='school_level'>Primary</div>
              </div>
            </div>
            <span>Arrow</span>
          </button>
          <button
            className="school"
            onClick={() => navigate('/school', {state: {school: 'schoolobject'}})}
          >
            <div className='school_info'>
              <div className="school_image">IMAGE</div>
              <div>
                <div className="school_name">Arusha technical college</div>
                <div className='school_level'>Primary</div>
              </div>
            </div>
            <span>Arrow</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default Matches