import React from 'react';
import {Link} from 'react-router-dom'
import Authform from '../Authentication/Authform'

const LandingPage = () => {


  return (
    <div className="landing-page-wrapper">
        <div className="landing-page-text-wrapper">
          <h1>
            A new way to learn American Sign Language
          </h1>
          <p>
            An interactive learning platform designed to aid you in your ASL learning journey.
          </p>

          <div>
            <Link to="/auth" className="get-started-bttn">
              <button>Get Started</button>
            </Link>
          </div>

        </div>
        <div>
          <img src="https://drive.google.com/uc?export=view&id=1Qne_O096dVPtBE53wWv41D9ZNT-481wW" />
        </div>
    </div>
  )
}

export default LandingPage
