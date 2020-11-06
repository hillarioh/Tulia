import React from 'react';
import Footer from './footer';
import twoo from "../assets/images/twoo.jpg";

function Covid() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="educate">
        <section className="intro">
          <h2>Covid 19</h2>
          <p>
            The current covid 19 crisis has shifted our focus to fighting the
            spread of the disease in our local surrounding. Through our
            empowerment program we have been creating awareness on proper
            sanitation encouraging the community to practise guidelines
            stipulated by the ministry of health. This include providing masks
            to the community, set up hand washing stations in the local area,
            providing food for the children’s families.
          </p>
          <div className="feed-pic">
            <img src={twoo} className="fp1" />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Covid;