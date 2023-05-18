import React from 'react'
import { useLocation } from 'react-router-dom'

function School() {
  const {state} = useLocation()
  const {school} = state

  return (
    <main id="school">
      <div className="container">
        <div id="school_info_container">
          <div id="name_and_id">
            <div id='school_intro'>
              <div id="school_name">{school.name}</div>
              <div id="school_id">{school.school_id}</div>
            </div>
            <button>CALL</button>
          </div>
          {school.description !== "" && 
            <div>
              <div className="card_title">Description</div>
              <div id="description" className="card">
                {school.desription}
              </div>
            </div>
          }
          {
            school.category.school_fee !== "" &&
            <div>
              <div className="card_title">School fees</div>
              <div id="school_fee" className="card">
                TSH 1,300,000 /=
              </div>
            </div>
          }
          <div>
            <div className="card_title">Categories</div>
            <div id="categories_cards">
              {school.category.level !== "" &&
                <div className="card">
                  <div className="category_key">Level</div>
                  <div className="category_value">{school.category.level}</div>
                </div>
              }
              {school.category.religion !== "" &&
                <div className="card">
                  <div className="category_key">Religion</div>
                  <div className="category_value">{school.category.religion}</div>
                </div>
              }
              {school.category.gender !== "" &&
                <div className="card">
                  <div className="category_key">Gender</div>
                  <div className="category_value">{school.category.gender}</div>
                </div>
              }
              {school.category.ownership !== "" &&
                <div className="card">
                  <div className="category_key">Ownership</div>
                  <div className="category_value">{school.category.ownership}</div>
                </div>
              }
              {school.category.occupation !== "" &&
                <div className="card">
                  <div className="category_key">Occupation</div>
                  <div className="category_value">{school.category.occupation}</div>
                </div>
              }
            </div>
          </div>
          <div>
            <div className="card_title">Images</div>
            <div id="school_images">
              <div className='image'>NO IMAGE</div>
              <div className='image'>NO IMAGE</div>
              <div className='image'>NO IMAGE</div>
            </div>
          </div>
          <div>
            <div className="card_title">Contacts</div>
            <div id="contacts">
              <div className="contact card">
                <div className="contact_title">Email</div>
                <div className="contact_detail">kajubufaraji@gmail.com</div>
              </div>
              <div className="contact card">
                <div className="contact_title">Mailbox</div>
                <div className="contact_detail">P.O.Box 966</div>
              </div>
              <div className="contact card">
                <div className="contact_title">Social</div>
                <ul>
                  <li>
                    <div className="contact_detail">Twitter: https://twitter.com</div>
                  </li>
                  <li>
                    <div className="contact_detail">Twitter: https://twitter.com</div>
                  </li>
                  <li>
                    <div className="contact_detail">Twitter: https://twitter.com</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="card_title">Latest results</div>
            <div id="results">
              {school.results.length !== 0 && 
                school.results.map(resultYear => (
                  <div className='result'>
                    <div className="outliner">
                      <div className="result_year">{resultYear.year}</div>
                      <ul>
                        <li>
                          Division one: <span>20</span>
                        </li>
                        <li>
                          Division two: <span>20</span>
                        </li>
                        <li>
                          Division three: <span>20</span>
                        </li>
                        <li>
                          Division four: <span>20</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default School