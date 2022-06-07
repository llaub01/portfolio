import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>

		<header id="home">
	        <nav id="nav-wrap">
	          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
	          <ul id="nav" className="nav">
	            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
	            <li><a className="smoothscroll" href="#about">About</a></li>
	            <li><a className="smoothscroll" href="#resume">Resume</a></li>
	            <li><a className="smoothscroll" href="#portfolio">Work</a></li>
	            <li><a className="smoothscroll" href="#contact">Contact</a></li>
	          </ul> {/* end #nav */}
	        </nav> {/* end #nav-wrap */}
	        <div className="row banner">
	            <div className="banner-text">
	               <h1 className="responsive-headline">I'm {portfolioData.name}.</h1>
	               <h3>I am a {portfolioData.role}.{portfolioData.roleDescription}
	               </h3>
	               <hr/>
	            <ul className="social">
	              <li><a href={portfolioData.facebook}><i className="fa fa-facebook" /></a></li>
	              <li><a href={portfolioData.twitter}><i className="fa fa-twitter" /></a></li>
	              <li><a href={portfolioData.linkedin}><i className="fa fa-linkedin" /></a></li>
	              <li><a href={portfolioData.instagram}><i className="fa fa-instagram" /></a></li>
	            </ul>
	          </div>
	        </div>
        
	        <p className="scrolldown">
	          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
	        </p>

		</header>

      </React.Fragment>
    );
  }
}
