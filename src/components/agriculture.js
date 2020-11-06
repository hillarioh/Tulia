import React from 'react';
import Footer from './footer';
//Agriculture pics
import agr1 from "../assets/images/agr1.jpg";
import agr2 from "../assets/images/agr2.jpg";
import agr3 from "../assets/images/agr3.jpg";
import agr4 from "../assets/images/agr4.jpg";
import slideC from "../assets/images/slide-c.jpg";
import slideE from "../assets/images/slide-e.jpg";


function Agriculture() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="agri">
        <section className="intro">
          <h2>Agricultural program</h2>
          <p>
            This is a vibrant project that we started early 2019 with one
            Guernsey cow. We are located in FPFK KIBRA Makina where we are
            blessed to come from a church that gave us the opportunity to
            practice agricultural activities that help to generate our income
            and helping out the community. We have been able to come up with
            livestock keeping and vegetables growing. This entails cows, goats,
            several chickens, kales and spinach .
          </p>
          <p>
            Because of limited space we practice zero grazing where we house the
            cows and have a small structure for keeping the chickens. This is
            among the top income generating activities. We give out vegetables
            once in a every two weeks(Wednesdays). This has been a success
            because of our farm and the local well wishers.
          </p>
          <div className="feed-pic">
            <img src={slideC} className="fp1" />
            <img src={slideE} className="fp1" />
            <img src={agr1} className="fp1" />
            <img src={agr2} className="fp1" />
            <img src={agr3} className="fp1" />
            <img src={agr4} className="fp1" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default  Agriculture;