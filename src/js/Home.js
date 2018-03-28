import React, {Component} from 'react';
import Player from './Player';
import Search from './Search';
import Nav from './Nav';
import Vids from './Vids';
import Welcome from './Welcome';
import '../css/main.css';
import Background from '../images/background4.jpg';

const API = 'useyourown'
const qry = 'karaoke'
const result = 5
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${qry}&part=snippet&maxResults=${result}`



var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Background})`
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

class Home extends Component {
  
  render() {
    console.log('rendering...')
    

    return(
      <div>
        <Nav />
              
        <div class="jumbotron">
          

        {/* <div align="center" class="embed-responsive embed-responsive-16by9"> */}
            <video id="video-background" autoPlay preload muted loop class="embed-responsive-item">
          {/* <video id="video-background" preload muted autoPlay loop> */}
            {/* <source src="../images/people.mp4" type="video/mp4" /> */}
            <source src="https://node.welive.com/assets/video/welive-vp9-607a998c5d.webm" type="video/webm" />
            {/* <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}
            {/* <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" /> */}
          </video>
          
          <div class="container welcome-container">
            <Welcome />
          </div>
        {/* </div> */}
          
        </div>
        {/* <div className="jumbotron">
          <div className="container">
          </div>
          
          <div id="vid1">
            <Vids />
          </div>
        </div> */}
        
        <div className="container">
        
          <h1>Part II</h1>
        </div>

          {/* <Section /> */}

        

        
      </div>
    )
  }
}

export default Home;

