import React from 'react';
import Footer from './footer';
//Empowerment
import emp1 from "../assets/images/emp1.jpg";
import emp2 from "../assets/images/emp2.jpeg";
import emp3 from "../assets/images/emp3.jpeg";

function Empower() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="educate">
        <section className="intro">
          <h2>Girl Child Empowerment</h2>
          <p>
            Through the library program we have created a platform which
            empowers the girl child. We provide mentorship and life skills to
            the young adolescent girls and older girls for them to discover
            there purpose in life. Some of our girls had lost track in life but
            through the coming together they were good ambassors of the same We
            distribute sanitary towels to more than thirty(30) girls every month
            as a way of life change and making a different in the community.
          </p>
          <div className="feed-pic">
            <img src={emp1} className="fp1" />
          </div>
        </section>
        <section className="intro">
          <h2>Women Empowerment</h2>
          <p>
            We have managed to partner with local organisation to provide food
            for families facing challenges during this corona pandemic. Also the
            feeding program success we have been able to have women who have
            join together to have a common goal and objectives This women have
            started forming saving group through our training and empowerment
          </p>
          <div className="feed-pic">
            <img src={emp2} className="fp1" />
            <img src={emp3} className="fp1" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Empower;