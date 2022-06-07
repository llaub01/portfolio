import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
    <React.Fragment>

      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My Work</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src={portfolioData.portfolio1.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio1.name}</h5>
                        <p>{portfolioData.portfolio1.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 01 */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                  <img alt src={portfolioData.portfolio2.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio2.name}</h5>
                        <p>{portfolioData.portfolio2.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 02 */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                  <img alt src={portfolioData.portfolio3.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio3.name}</h5>
                        <p>{portfolioData.portfolio3.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 03 */}    
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                  <img alt src={portfolioData.portfolio4.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio4.name}</h5>
                        <p>{portfolioData.portfolio4.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 04 */}              
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                  <img alt src={portfolioData.portfolio5.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio5.name}</h5>
                        <p>{portfolioData.portfolio5.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 05 */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                  <img alt src={portfolioData.portfolio6.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio6.name}</h5>
                        <p>{portfolioData.portfolio6.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 06 */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                  <img alt src={portfolioData.portfolio7.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio7.name}</h5>
                        <p>{portfolioData.portfolio7.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 07 */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                  <img alt src={portfolioData.portfolio8.img} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{portfolioData.portfolio8.name}</h5>
                        <p>{portfolioData.portfolio8.skills}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end 08 */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          
          {/* Modal Popup--------------------------------------------------------------- */}
         
         <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio1.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio1.name}</h4>
              <p>{portfolioData.portfolio1.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio1.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio1.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio2.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio2.name}</h4>
              <p>{portfolioData.portfolio2.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio2.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio2.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio3.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio3.name}</h4>
              <p>{portfolioData.portfolio3.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio3.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio3.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio4.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio4.name}</h4>
              <p>{portfolioData.portfolio4.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio4.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio4.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio5.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio5.name}</h4>
              <p>{portfolioData.portfolio5.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio5.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio5.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio6.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio6.name}</h4>
              <p>{portfolioData.portfolio6.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio6.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio6.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio7.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio7.name}</h4>
              <p>{portfolioData.portfolio7.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio7.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio7.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}
          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src={portfolioData.portfolio8.imgm} alt />
            <div className="description-box">
              <h4>{portfolioData.portfolio8.name}</h4>
              <p>{portfolioData.portfolio8.descr}</p>
              <span className="categories"><i className="fa fa-tag" />{portfolioData.portfolio8.skills}</span>
            </div>
            <div className="link-box">
              <a href={portfolioData.portfolio8.url}>Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}
          
        
        </div> {/* row End */} */
    </section>
    </React.Fragment>
    );
  }
};