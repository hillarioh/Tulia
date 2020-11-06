import React from 'react';
import Footer from './footer';
//Feed images
import feed1 from "../assets/images/feed1.jpg";
import feed2 from "../assets/images/feed2.jpeg";
import feed3 from "../assets/images/feed3.jpeg";

function Feeding() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="feeding">
        <section className="intro">
          <h2>Feeding program</h2>
          <p>
            This program is one of the active and running program that gives the
            community children and youths to have hope.it started on April to
            feed the less privileged families who go hungry on empty stomach.
          </p>
          <p>
            We give out milk to children on every Saturday and also give out
            vegetables to youths and mothers on every Tuesday. Through also this
            program we intend to support the community spiritually, socially and
            mentally as they come together we intend to share allot from one
            another
          </p>
          <div className="feed-pic">
            <img src={feed1} className="fp1" />
            <img src={feed2} className="fp1" />
            <img src={feed3} className="fp1" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Feeding;