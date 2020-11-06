import React from 'react';
import Footer from './footer';
//Peer educators image
import peer1 from "../assets/images/peer1.jpg";
import peer2 from "../assets/images/peer2.jpg";

function Education() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="educate">
        <section className="intro">
          <h2>Education program</h2>
          <p>
            To improve the quality of education and empowering of youths we were
            able to partner with the church and carlile college to set up a
            local library. Through the library we are able to coach, assist and
            mentor the young children. We do teach children from class 4 all the
            way to form 4 . We offer this program to assist students in the
            community and also a platform where we can be able to mentor our own
            children to grow spiritually and mentally.
          </p>
          <p>
            Through our partnership with carlile college we are able to give
            scholarships to the less fortunate youths who cannot finish school
            to continue with short courses.
          </p>
          <div className="feed-pic">
            <img src={peer1} className="fp1" />
            <img src={peer2} className="fp1" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Education;