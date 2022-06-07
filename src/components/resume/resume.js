import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.education1.name}</h3>
                <p className="info">{portfolioData.education1.degree}<span>•</span> <em className="date">{portfolioData.education1.grad}</em></p>
                <p>{portfolioData.education1.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.education2.name}</h3>
                <p className="info">{portfolioData.education2.degree}<span>•</span> <em className="date">{portfolioData.education2.grad}</em></p>
                <p>{portfolioData.education2.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.education3.name}</h3>
                <p className="info">{portfolioData.education3.degree}<span>•</span> <em className="date">{portfolioData.education3.grad}</em></p>
                <p>{portfolioData.education3.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.education4.name}</h3>
                <p className="info">{portfolioData.education4.degree}<span>•</span> <em className="date">{portfolioData.education4.grad}</em></p>
                <p>{portfolioData.education4.description}</p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.work1.name}</h3>
                <p className="info">{portfolioData.work1.title}<span>•</span> <em className="date">{portfolioData.work1.date}</em></p>
                <p>{portfolioData.work1.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.work2.name}</h3>
                <p className="info">{portfolioData.work2.title}<span>•</span> <em className="date">{portfolioData.work2.date}</em></p>
                <p>{portfolioData.work2.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.work3.name}</h3>
                <p className="info">{portfolioData.work3.title}<span>•</span> <em className="date">{portfolioData.work3.date}</em></p>
                <p>{portfolioData.work3.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.work4.name}</h3>
                <p className="info">{portfolioData.work4.title}<span>•</span> <em className="date">{portfolioData.work4.date}</em></p>
                <p>{portfolioData.work4.description}</p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{portfolioData.work5.name}</h3>
                <p className="info">{portfolioData.work5.title}<span>•</span> <em className="date">{portfolioData.work5.date}</em></p>
                <p>{portfolioData.work5.description}</p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}

        {/* Skills ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="three columns">
            <ul>
              <h3>{portfolioData.skills.leadership[0]}</h3>
              <li>{portfolioData.skills.leadership[1]}</li>
              <li>{portfolioData.skills.leadership[2]}</li>
              <li>{portfolioData.skills.leadership[3]}</li>
              <li>{portfolioData.skills.leadership[4]}</li>
              <li>{portfolioData.skills.leadership[5]}</li>
              <li>{portfolioData.skills.leadership[6]}</li>
              <li>{portfolioData.skills.leadership[7]}</li>
            </ul>
          </div>

          <div className="three columns">
            <ul>
              <h3>{portfolioData.skills.webdev[0]}</h3>
              <li>{portfolioData.skills.webdev[1]}</li>
              <li>{portfolioData.skills.webdev[2]}</li>
              <li>{portfolioData.skills.webdev[3]}</li>
              <li>{portfolioData.skills.webdev[4]}</li>
              <li>{portfolioData.skills.webdev[5]}</li>
              <li>{portfolioData.skills.webdev[6]}</li>
              <li>{portfolioData.skills.webdev[7]}</li>
              <li>{portfolioData.skills.webdev[8]}</li>
              <li>{portfolioData.skills.webdev[9]}</li>
              <li>{portfolioData.skills.webdev[10]}</li>
              <li>{portfolioData.skills.webdev[11]}</li>
              <li>{portfolioData.skills.webdev[12]}</li>
              <li>{portfolioData.skills.webdev[13]}</li>
              <li>{portfolioData.skills.webdev[14]}</li>
            </ul>
          </div>

          <div className="three columns">
            <ul>
              <h3>{portfolioData.skills.software[0]}</h3>
              <li>{portfolioData.skills.software[1]}</li>
              <li>{portfolioData.skills.software[2]}</li>
              <li>{portfolioData.skills.software[3]}</li>
              <li>{portfolioData.skills.software[4]}</li>
              <li>{portfolioData.skills.software[5]}</li>
              <li>{portfolioData.skills.software[6]}</li>
              <li>{portfolioData.skills.software[7]}</li>
            </ul>
          </div>
        </div> {/* end skill-bars */}

      </section>
    </React.Fragment>
    );
  }
};