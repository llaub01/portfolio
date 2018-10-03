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
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            {/*}
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand css" /><em>Wordpress</em></li>
                <li><span className="bar-expand wordpress" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
        </section>
    </React.Fragment>
    );
  }
};