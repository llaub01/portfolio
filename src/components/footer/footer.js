import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>

      <footer>
        <div class="row">

           <div class="twelve columns">

              <ul class="social-links">
                <li><a href={portfolioData.facebook}><i className="fa fa-facebook" /></a></li>
                <li><a href={portfolioData.twitter}><i className="fa fa-twitter" /></a></li>
                <li><a href={portfolioData.linkedin}><i className="fa fa-linkedin" /></a></li>
                <li><a href={portfolioData.instagram}><i className="fa fa-instagram" /></a></li>
              </ul>

              <ul class="copyright">
                 <li>&copy; Copyright 2022 Lonnie Laub</li>
              </ul>

           </div>

           <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

        </div>
      </footer>
    </React.Fragment>
    );
  }
};