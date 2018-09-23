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
                <li><a href={portfolioData.googleplus}><i className="fa fa-google-plus" /></a></li>
                <li><a href={portfolioData.linkedin}><i className="fa fa-linkedin" /></a></li>
                <li><a href={portfolioData.instagram}><i className="fa fa-instagram" /></a></li>
              </ul>

              <ul class="copyright">
                 <li>&copy; Copyright 2018 Lonnie Laub</li>
                 <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
              </ul>

           </div>

           <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>

        </div>
      </footer>
    </React.Fragment>
    );
  }
};