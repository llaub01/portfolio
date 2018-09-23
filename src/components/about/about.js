import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>

      <section id="about">
        <div class="row">
          <div class="three columns">
            <img class="profile-pic"  src="images/lonnie-profile.png" alt="" />
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
                  <a href="#" class="button"><i class="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
        </div>
      </section>

    </React.Fragment>
    );
  }
};