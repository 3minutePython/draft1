import React from 'react';
import '../css/App.css';




class Welcome extends React.Component {
  
  render() {
    return(
      <div id="welcome">

        <h1>Welcome home.</h1>
        <p>Hmlet is more than just a place to live.</p>
        <p>It's where you find where you belong.</p>
        <button className="btn btn-lg btn-custom">Start Now =></button>
        
      </div>
    )
  }
}

export default Welcome;