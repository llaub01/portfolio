import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
    <React.Fragment>

      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/pride-cleaners.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Pride Cleaners</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/portfolio/across-the-streams.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Across the Streams</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/portfolio/friend-finder.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Friend Finder</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt src="images/portfolio/eat-da-burger.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Eat da Burger</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/train-schedule.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Train Schedule</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/giftastic.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Giftastic</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup--------------------------------------------------------------- */}
         
         <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-pride-cleaners.png" alt />
            <div className="description-box">
              <h4>Pride Cleaners</h4>
              <p>Assisted in the development and design of Pride Cleaners' website and admin site refresh. Utilized Javascript, Git, HTML, SCSS, Node.js, Espress.js, Gulp, Postgres and Bootstrap.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Web Development</span>
            </div>
            <div className="link-box">
              <a href="http://www.pridecleaners.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-across-the-streams.png" alt />
            <div className="description-box">
              <h4>Across the Streams</h4>
              <p>KU Coding Bootcamp group project. Across the Streams is an app which stores shows the user selects and recommends the best streaming services in which the uers should subscribe. Utilized Javascript, HTML, CSS, APIs, Bootstrap, Node.js, Espress.js and Firebase</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://markverbeck.github.io/across-the-streams/index.html">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}

          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-friend-finder.png" alt />
            <div className="description-box">
              <h4>Friend Finder</h4>
              <p>Friend Finder is a project in the KU Coding Bootcamp which has you answer personality questions and matches you up with a compatible friend. Utilized Javascript, HTML, CSS, Bootstrap, Node.js, Espress.js, Heroku and MySQL.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://bootcamp-friend-finder.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-eat-da-burger.png" alt />
            <div className="description-box">
              <h4>Eat da Burger</h4>
              <p>Eat-da-Burger is a project in the KU Coding Bootcamp which let's you add and "consume" burgers. Utilized Javascript, HTML, CSS, Bootstrap, Node.js, Espress.js, Handlebars, Heroku and MySQL.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://intense-scrubland-16622.herokuapp.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-train-schedule.png" alt />
            <div className="description-box">
              <h4>Train Scheule</h4>
              <p>Train Scheduler is a project in the KU Coding Bootcamp which lets you add and remove train schedules and lets you know when they will return to the train station. Utilized Javascript, HTML, CSS, Bootstrap, Node.js, Espress.js and Firebase.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://llaub01.github.io/train-schedule/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-giftastic.png" alt />
            <div className="description-box">
              <h4>Giftastic</h4>
              <p>Giftastic is a project in the KU Coding Bootcamp which utilized the Giphy API to display GIFs of the users chosing. Utilized Javascript, HTML, CSS, Giphy API, Bootstrap, Node.js and Espress.js.</p>
              <span className="categories"><i className="fa fa-tag" />Webdesign, Web Development</span>
            </div>
            <div className="link-box">
              <a href="https://llaub01.github.io/giftastic/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
        
        </div> {/* row End */} */
    </section>
    </React.Fragment>
    );
  }
};