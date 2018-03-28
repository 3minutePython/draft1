import React from 'react';
import '../css/App.css';




class Welcome extends React.Component {
  
  render() {
    return(
      
      <div>
          {/* <div class="col-xs-6 col-md-4 testBlue">
            <p>blah blah blah</p>
          </div>
          <div class="col-xs-12 col-md-8 testRed">
            blah blah blah
          </div> */}
            <iframe
              width="373"
              height="210"
              src="https://www.youtube.com/embed/EYv2czin7WI?rel=0&amp;controls=0&amp;showinfo=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              >blah blah</iframe>
              <iframe
                width="373"
                height="210"
                src="https://www.youtube.com/embed/EYv2czin7WI?rel=0&amp;controls=0&amp;showinfo=0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                ></iframe>
                <iframe
                  width="373"
                  height="210"
                  src="https://www.youtube.com/embed/EYv2czin7WI?rel=0&amp;controls=0&amp;showinfo=0"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  ></iframe>
      </div>
      


    )
  }
}

export default Welcome;