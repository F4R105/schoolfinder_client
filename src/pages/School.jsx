import React from 'react'

function School() {
  return (
    <main id="school">
      <div className="container">
        <div id="school_info_container">
          <div id="name_and_id">
            <div id='school_intro'>
              <div id="school_name">Arusha technical college</div>
              <div id="school_id">P103</div>
            </div>
            <button>CALL</button>
          </div>
          <div>
            <div className="card_title">Description</div>
            <div id="description" className="card">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, molestiae quidem autem harum maxime nobis quia minima ex dolore quae?
            </div>
          </div>
          <div>
            <div className="card_title">School fees</div>
            <div id="school_fee" className="card">
              TSH 1,300,000 /=
            </div>
          </div>
          <div>
            <div className="card_title">Categories</div>
            <div id="categories_cards">
              <div className="card">
                <div className="category_key">Level</div>
                <div className="category_value">Primary</div>
              </div>
              <div className="card">
                <div className="category_key">Level</div>
                <div className="category_value">Primary</div>
              </div>
            </div>
          </div>
          <div>
            <div className="card_title">Images</div>
            <div id="school_images">
              <div className='image'>IMAGE</div>
              <div className='image'>IMAGE</div>
              <div className='image'>IMAGE</div>
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
              <div className='result'>
                <div className="outliner">
                  <div className="result_year">2022</div>
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
              <div className='result'>
                <div className="outliner">
                  <div className="result_year">2022</div>
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
              <div className='result'>
                <div className="outliner">
                  <div className="result_year">2022</div>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default School