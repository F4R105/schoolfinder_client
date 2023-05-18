import React from 'react'
import { useNavigate } from 'react-router-dom'

function Filter() {
    const navigate = useNavigate()

    return (
        <main id="filter">
            <div className="container">
                <div id="filter_container">
                <div className="category">
                    <div className="category_title">Level</div>
                    <div className="category_options">
                        <div className="option">Primary</div>
                        <div className="option">Secondary</div>
                        <div className="option">Advanced</div>
                        <div className="option">College</div>
                        <div className="option">University</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Ownership</div>
                    <div className="category_options">
                        <div className="option">Public</div>
                        <div className="option">Private</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Gender</div>
                    <div className="category_options">
                        <div className="option">All</div>
                        <div className="option">Girls</div>
                        <div className="option">Boys</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Religion</div>
                    <div className="category_options">
                        <div className="option">All</div>
                        <div className="option">Christian</div>
                        <div className="option">Islamic</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">Occupation</div>
                    <div className="category_options">
                        <div className="option">All</div>
                        <div className="option">Day</div>
                        <div className="option">Boarding</div>
                    </div>
                </div>
                <div className="category">
                    <div className="category_title">School fees</div>
                    <div className="category_options">
                        <div className="option">500k</div>
                        <div className="option">1M</div>
                        <div className="option">2M</div>
                        <div className="option">3M</div>
                    </div>
                </div>
                <button 
                    id="filter_btn"
                    onClick={() => navigate('/matches', {state: {filter: 'filterobject'}})}
                >
                    Filter
                </button>
                </div>
            </div>
        </main>
    )
}

export default Filter