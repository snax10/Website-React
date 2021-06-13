import React from 'react'
import featureimage from '../images/Frame 19.png'

function Features() {
    return (
        <div id="features">
            <div className="features-model">
                <img src={featureimage} alt="feature-img" />
            </div>
            <div className="features-text">
                <h2>Features</h2>
                <h3>This Applicattion <span>Software</span> is Art</h3>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipis
                    lorem ipsum dolor sit amet, consectetur adipis
                    lorem ipsum dolor sit amet, consectetur adipis
                    lorem ipsum dolor sit amet, consectetur adipis
                    lorem ipsum dolor sit amet, consectetur adipis
                </p>
                <button>View More Feartures</button>
            </div>

            <div className="arrow"></div>
        </div>
    )
}

export default Features
