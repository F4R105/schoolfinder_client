import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <main id="home">
      <div className="container">
          <div id="brand">
              <div id="logo">
                  <span>school</span>
                  Finder
              </div>
              <p id="brand-descr">SchoolFinder system</p>
          </div>
          <div id="search_container">
              <div id="search">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                  <button 
                    id="search_btn"
                    onClick={() => navigate('/matches', {state: {query: searchQuery}})}
                  >
                    Search
                  </button>
              </div>
              <Link 
                to="/filter"
                id="filter_btn"
              >
                Filter
              </Link>
          </div>
      </div>
    </main>
  )
}

export default Home