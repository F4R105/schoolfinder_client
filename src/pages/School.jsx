import React from 'react'
import { useLocation } from 'react-router-dom'

function School() {
  const {state} = useLocation()
  const {school} = state
  console.log(school)

  return (
    <main id="school">
      <div className="container">
        <div id="school_info_container">
          <div id="name_and_id">
            <div id='school_intro'>
              <div id="school_name">{school.name}</div>
              <div id="school_id">{school.school_id}</div>
            </div>
            {
              school.contacts.phone !== "" &&
              <a id='callBtn' href={`tel:${school.contacts.phone}`}>CALL</a>
            }
          </div>
          {school.description !== "" && 
            <div>
              <div className="card_title">Description</div>
              <div id="description" className="card">
                {school.description}
              </div>
            </div>
          }
          {
            school.category.school_fee !== "" &&
            <div>
              <div className="card_title">School fees</div>
              <div id="school_fee" className="card">
                TSH {school.category.school_fee}/=
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
                <div className="contact_title">Phone</div>
                <div className="contact_detail">
                  {school.contacts.phone === "" ? '-' : school.contacts.phone}
                </div>
              </div>
              <div className="contact card">
                <div className="contact_title">Mailbox</div>
                <div className="contact_detail">
                  {school.contacts.mailbox === "" ? '-' : school.contacts.mailbox}
                </div>
              </div>
              <div className="contact card">
                <div className="contact_title">Email</div>
                <div className="contact_detail">
                  {school.contacts.email === "" ? '-' : school.contacts.email}
                </div>
              </div>
              {
                school.contacts.socials.length !== 0 &&
                <>
                  <div className="contact card">
                    <div className="contact_title">Social</div>
                    <ul>
                      {school.contacts.socials.map(social => (
                        <li>
                          <div className="contact_detail">Twitter: https://twitter.com</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              }
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
                        {school.category.level === "primary" ? 
                          <>
                            <li>
                              Grade A: <span>{resultYear.grades.A}</span>
                            </li>
                            <li>
                              Grade B: <span>{resultYear.grades.B}</span>
                            </li>
                            <li>
                              Grade C: <span>{resultYear.grades.C}</span>
                            </li>
                            <li>
                              Grade D: <span>{resultYear.grades.D}</span>
                            </li>
                            <li>
                              Grade F: <span>{resultYear.grades.E}</span>
                            </li>
                          </> :
                          <>
                            <li>
                              Division one: <span>{resultYear.results.division_one}</span>
                            </li>
                            <li>
                              Division two: <span>{resultYear.results.division_two}</span>
                            </li>
                            <li>
                              Division three: <span>{resultYear.results.division_three}</span>
                            </li>
                            <li>
                              Division four: <span>{resultYear.results.division_four}</span>
                            </li>
                            <li>
                              Fail: <span>{resultYear.results.fail}</span>
                            </li>
                          </>
                        }
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