import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>

      <section id="about">
        <div class="row">
          <div class="three columns">
            <img class="profile-pic"  src="images/LL-profile.jpeg" alt="" />
          </div>

          <div class="nine columns main-col">
            <h2>About Me</h2>

            <p>{portfolioData.aboutme}</p>

            <div class="row">
              <div class="columns contact-details">
                <h2>Contact Details</h2>
                <p class="address">
  						    <span>{portfolioData.name}</span><br/>
  						    <span>{portfolioData.address.street}<br/>{portfolioData.address.city}</span><br/>
                </p>

              </div>

               <div class="columns download">
                <p>
                  <a href="LonnieLaub-Resume2022.pdf" class="button"><i class="fa fa-download"></i>Download Resume</a>
                  <a href="LonnieLaub-Resume2020.pdf" class="button"><i class="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
          

          {/* portfolio-wrapper */}

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/family.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Family</h5>
                    <p>I'm a family man</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/coolthings.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Do cool things</h5>
                    <p>Let's have cool experiences</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/art.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Art</h5>
                    <p>Appreciator of art</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/adventure.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Adventures</h5>
                    <p>Love going on adventures</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/music.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Live music</h5>
                    <p>Avid concert goer</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/nostalgia.jpg" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>80's Nostalgia</h5>
                    <p>Love all the nostalgia</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/exercise.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Exercise</h5>
                    <p>Love moving my body - p90x</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}

            <div className="columns portfolio-item">
              <div className="item-wrap">
                <img alt="" src="images/about/meditate.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Meditation</h5>
                    <p>Love to meditate</p>
                  </div>
                </div>
              </div>
            </div> {/* item end */}
          </div>
        </div>

      </section>

    </React.Fragment>
    );
  }
};