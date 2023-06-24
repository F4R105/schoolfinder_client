import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const inputElement = useRef()

  const Search = () => {
    if(searchQuery === "") return
    navigate('/matches', {state: {trigger: "search", query: searchQuery}})
  }

  const handleFocus = () => {
      document.addEventListener('keyup', (e)=>{
        if(e.key === "Enter") {
          console.log(
            'enter pressed'
          )
          Search()
        }
      })
  }

  useEffect(()=>{
    inputElement.current.focus()
  },[])
  
  return (
  <main id="home">
      <div className="container">
          <div id="brand">
              <div id="logo">
                  <span>school</span>Finder
              </div>
              <p id="brand-descr">SchoolFinder system</p>
          </div>
          <div id="search_container">
              <div id="search">
                  <input 
                    type="text" 
                    value={searchQuery}
                    ref={inputElement}
                    onFocus={handleFocus}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                  <button 
                    id="search_btn"
                    onClick={() => Search()}
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
          <div id="tags"></div>
      </div>
    </main>
  )
}

export default Home