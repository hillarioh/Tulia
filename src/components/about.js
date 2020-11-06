import React from 'react';
import Footer from './footer';

//Team Images
import teamA from "../assets/images/team-hilla.jpg";
import teamB from "../assets/images/team-anto.jpg";
import teamC from "../assets/images/team-titus.jpg";
import teamD from "../assets/images/team-joy.jpg";
import teamE from "../assets/images/team-fai.jpg";
import eleven from "../assets/images/eleven.jpg";
import abbt from "../assets/images/all.png";

function About() {
  window.scroll(0, 0);
  return (
    <div className="home">
      <div className="header1">
        <img src={abbt} />
      </div>
      <div className="about">
        <section className="intro">
          <div className="about-title">
            <h1>About Us</h1>
            <p>
              <b>Turning Lives Around</b> foundation was founded in the year
              2019 by Hillary and Anthony with the aim of changing the lives of
              the community.
            </p>
          </div>
          <div className="about-end"></div>
          <div className="about-title">
            <h1>Our Mission</h1>
            <p>
              Turning Lives Around Foundation is a local program that aims at
              transforming and enlightening youths and women in urban slums by
              giving out opportunities, entrepreneurship skills and helping the
              community at large.
            </p>
          </div>
          <div className="about-title">
            <h1>Our Vision</h1>
            <p>
              Providing substantial amenities to the community, empowering the
              community to be socially, economically viable and open doors for
              success.
            </p>
          </div>
          <div className="about-title">
            <h1>Our Story</h1>
            <p>
              Turning lives around the community has not been an easy task to do
              it needs power,courage,motive,bravery and above all relying in the
              name of the Lord. Being raised and living in a slum is both a gift
              of great opportunities and challenges in all kinds of ways. Having
              been born and raised in Kibra slum, we got to attend local schools
              and finished our schooling despite the hardship and perseverance.
              In 2019 We started a mentorship project that aimed at building the
              youths through engaging in simple activities. This later inspired
              the idea of coming up with a local foundation that will not only
              empower the youth but also encompass the whole community(women,
              people with disabilities and orphans) at large. During the corona
              virus pandemic we were able to assist the community with masks and
              some food from our farm product. we were also able to keep the
              youths busy through teaching them entrepreneurship skills and
              agricultural activities like planting vegetables. Our aim is to
              turn lives around the community and making it better from a young
              age. This will ensure we build the mindset and capability to
              develop community both mentally, spiritually, economically and
              socially.
            </p>
          </div>
        </section>
        <section className="team">
          <h2>Our team</h2>
          <div className="row">
            <div className="col-md-3">
              <img src={teamA} className="news-img" />
              <h3>Hillary Okerio</h3>
              <p>Co-Founder</p>
            </div>
            <div className="col-md-3">
              <img src={teamB} className="news-img" />
              <h3>Anthony Masese</h3>
              <p>Co-Founder</p>
            </div>
            <div className="col-md-3">
              <img src={eleven} className="news-img" />
              <h3>Felix Kibagendi</h3>
              <p>Finance Director</p>
            </div>
            <div className="col-md-3">
              <img src={teamC} className="news-img" />
              <h3>Titus Kebabe</h3>
              <p>Marketing</p>
            </div>
            <div className="col-md-3">
              <img src={teamD} className="news-img" />
              <h3>Joy Kwamboka</h3>
              <p>Social Co-ordinator</p>
            </div>
            <div className="col-md-3">
              <img src={teamE} className="news-img" />
              <h3>Faith Kemunto</h3>
              <p>Welfare Co-ordinator</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;