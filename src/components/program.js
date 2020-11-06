import React from 'react';
import Footer from './footer';

function Program() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="program">
        <div className="top-program">
          <h2 id="program">Our Programs</h2>
          <p>
            This is a list of the program that we manage under our mission and
            vision.
          </p>
        </div>
        <div className="bottom-program">
          <h2>INSIDE WHAT WE DO</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="meg">
                <div className="news-img img1"></div>
                <h3>Feeding Program</h3>
              </div>
              <a className="meg1" href="./feeding.html">
                <p>
                  We provide feeding program to our children in the community
                </p>
                <h4>FIND OUT MORE</h4>
              </a>
            </div>
            <div className="col-md-3">
              <div className="meg">
                <div className="news-img img1"></div>
                <h3>Education</h3>
              </div>
              <a className="meg1" href="education.html">
                <p>
                  We provide feeding program to our children in the community
                </p>
                <h4>FIND OUT MORE</h4>
              </a>
            </div>
            <div className="col-md-3">
              <div className="meg">
                <div className="news-img img1"></div>
                <h3>Empowerment</h3>
              </div>
              <a className="meg1" href="empower.html">
                <p>
                  We provide feeding program to our children in the community
                </p>
                <h4>FIND OUT MORE</h4>
              </a>
            </div>
            <div className="col-md-3">
              <div className="meg">
                <div className="news-img img1"></div>
                <h3>Agricultural Activities</h3>
              </div>
              <a className="meg1" href="agriculture.html">
                <p>
                  We provide feeding program to our children in the community
                </p>
                <h4>FIND OUT MORE</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Program;