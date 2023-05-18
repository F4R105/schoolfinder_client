import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { FaCaretRight, FaExclamationTriangle } from "react-icons/fa";

function Matches() {
  const {state} = useLocation()
  const navigate = useNavigate()
  // const {query} = state
  const [schools, setSchools] = useState([])
  const [loading, setLoading] = useState(true)

  const searchForSchools = async (searchQuery) => {
    try{
      const res = await fetch('http://localhost:8160/search', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({searchQuery})
      })

      const matches = res.json()
      return matches
    }catch(error){console.log(error.message)}
  }

  useEffect(()=>{
    searchForSchools(state.query)
    .then(res => {
      console.log('matches', res)
      setSchools(res)
      console.log('school length is zero', schools.length)
      setLoading(false)
    })
  },[])

  return (
    <main id="matches">
      <div className="container">
        <div id="schools_container">
          <div className='pageTitle'>Matches</div>
          {loading ? 
            <div className='loader'>
              <ThreeDots 
                height="50" 
                width="50" 
                color="#ff7f2aff" 
                ariaLabel="three-dots-loading"
              />
            </div> : 
            <>
              {schools.length === 0 ? 
                <div className='empty'>
                  <FaExclamationTriangle
                    color='gray'
                    size={40}
                   />
                  <span>No school were found</span>
                </div> : 
                <>
                  <div className="matchesDescription">{schools.length} schools were found</div>
                  {schools.map(school => (
                      <button
                        className="school"
                        onClick={() => navigate('/school', {state: {school}})}
                      >
                        <div className='school_info'>
                          <div className="school_image">IMAGE</div>
                          <div>
                            <div className="school_name">{school.name}</div>
                            <div className='school_level'>{school.category.level}</div>
                          </div>
                        </div>
                        <span>
                          <FaCaretRight />
                        </span>
                      </button>
                  ))}
                </>
              }
            </>
          }
        </div>
      </div>
    </main>
  )
}

export default Matches