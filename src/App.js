import { div } from "prelude-ls";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";
import logo from "./assets/images/logo.png";
import front1 from "./assets/images/front.jpg";
import front2 from "./assets/images/front2.jpg";
import front3 from "./assets/images/one.jpg";
import front4 from "./assets/images/two.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectFade]);

function App() {
  return <Nav />;
}

function Home() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <div className="header">
        <div className="slider">
          <Swiper
            effect="fade"
            navigation
            pagination={{ type: "progressbar" }}
            spaceBetween={0}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide style={{ height: "90vh" }}>
              <div>
                <img
                  src={front1}
                  alt=""
                  style={{ width: "100%", height: "720px" }}
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "90vh" }}>
              <div>
                <img
                  src={front2}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "90vh" }}>
              <div>
                <img
                  src={front3}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ height: "90vh" }}>
              <div>
                <img
                  src={front4}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                ></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section className="over">
        <div className="overview">
          <div className="over-head">
            <h2>What we do</h2>
            <div className="hint"></div>
            <p className="over-content">
              We Turn lives around in the community through various program
              running under our chain.
            </p>
          </div>
        </div>

        <div className="overview">
          <div className="over-head">
            <h2>Our Impact</h2>
            <div className="hint"></div>
            <p className="over-content">
              Our agenda entails creating positive impact through scuccess in
              our team.
            </p>
          </div>
        </div>

        <div className="overview">
          <div className="over-head">
            <h2>Work with Us</h2>
            <div className="hint"></div>
            <p className="over-content">Get in touch with us.</p>
          </div>
        </div>
      </section>

      <section className="vision">
        <div className="vis-body">
          <h1>Delivering a Response to COVID-19</h1>
          <p>
            At a time of a global health crisis, we are drawing on our deep
            delivery expertise and trusted community ties to respond to emerging
            farmer needs.
          </p>
          <h3>Read More</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="header1">
        <div id="cover"></div>
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
              <div className="news-img img1"></div>
              <h3>Hillary Okerio</h3>
              <p>Co-Founder</p>
            </div>
            <div className="col-md-3">
              <div className="news-img img1"></div>
              <h3>Anthony Masese</h3>
              <p>Co-Founder</p>
            </div>
            <div className="col-md-3">
              <div className="news-img img1"></div>
              <h3>Felix Kibagendi</h3>
              <p>Co-Founder</p>
            </div>
            <div className="col-md-3">
              <div className="news-img img1"></div>
              <h3>Titus Omwando</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
function Agriculture() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="educate">
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
            <div className="fp1"></div>
            <div className="fp2"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
function Contact() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div className="contact-form">
            <form action="" method="post">
              <input type="text" name="" id="" placeholder="Full names" />
              <input type="email" name="" id="" placeholder="email address" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <input type="button" value="Send message" />
            </form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d779.0586849385528!2d36.78194442914243!3d-1.3068883999404184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10820e523ef7%3A0x25ad15abb989a314!2sFPFK%20KIBERA%20CHURCH!5e1!3m2!1sen!2ske!4v1601446414122!5m2!1sen!2ske"
              width="600"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Covid() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="covid">
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
            <div className="fp1"></div>
            <div className="fp2"></div>
            <div className="fp1"></div>
            <div className="fp2"></div>
            <div className="fp1"></div>
            <div className="fp2"></div>
            <div className="fp1"></div>
            <div className="fp2"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
function Donate() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="donate">
        <div>
          <h2>Donate to Tulia Foundation</h2>
          <p>
            Give to support our community projects around the slum area and
            beyond. Donate to Tulia Foundation and see your impact with regular
            updates especially what we are doing in this Coronavirus pandemic
            hard time. Feel great when you get updates about how your money is
            put to work by our trusted organization.
          </p>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="7JW9XJT9DJBXA"
            />
            <input
              id="paypal"
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_KE/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Education() {
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
            <div className="fp1"></div>
            <div className="fp2"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
function Empower() {
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
            <div className="fp1"></div>
            <div className="fp2"></div>
          </div>
        </section>
        <section className="intro">
          <h2>Women Empowerment</h2>
          <p>
            Through the feeding program success we have been able to have women
            who have join together to have a common goal and objectives This
            women have started forming saving group through our training and
            empowerment
          </p>
          <div className="feed-pic">
            <div className="fp1"></div>
            <div className="fp2"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
function Feeding() {
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
            <div className="fp1"></div>
            <div className="fp2"></div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
function Gallery() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="gallery">
        <h2 className="gallery-title">Our Gallery</h2>
        <div className="videos">
          <h2>Videos</h2>
          <iframe
            width="700"
            height="480"
            src="https://www.youtube.com/embed/YqjC5yvVoXg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="images">
          <h2>Images</h2>
          <div className="gallery-image">
            <div className="col1"></div>
            <div className="col2"></div>
            <div className="col3"></div>
            <div className="col4"></div>
            <div className="col5"></div>
            <div className="col6"></div>
            <div className="col7"></div>
            <div className="col8"></div>
            <div className="col9"></div>
            <div className="col10"></div>
            <div className="col11"></div>
            <div className="col12"></div>
            <div className="col13"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Program() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="program">
        <div className="top-program">
          <h2>Our Programs</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi
            suscipit ab harum quas vel quaerat voluptatibus accusantium facere
            iure!
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
function Nav() {
  return (
    <Router>
      <nav className="nav">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="Organisation logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li id="nav-program">
            <h3>
              <Link className="nav-link" to="/program">
                Programs
              </Link>
            </h3>
            <div>
              <span>
                <Link to="/feeding">Feeding program</Link>
              </span>
              <span>
                <Link to="/education">Peer Counselling</Link>
              </span>
              <span>
                <Link to="/empower">Empowerment</Link>
              </span>
              <span>
                <Link to="/agriculture">Agricultural Activities</Link>
              </span>
            </div>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/covid">
              COVID-19
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/donate">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/covid">
          <Covid />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/feeding">
          <Feeding />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/program">
          <Program />
        </Route>
        <Route path="/agriculture">
          <Agriculture />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/empower">
          <Empower />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="ft1">
        <div className="form">
          <h2>Email newsletter</h2>
          <input type="text" placeholder="First name" name="fname" id="fname" />
          <input type="text" placeholder="Last name" name="lname" id="lname" />
          <input
            type="email"
            placeholder="Email adress"
            name="email"
            id="email"
          />
          <h3>Subscribe</h3>
        </div>
        <div className="form2">
          <div id="ft-nav">
            <ul className="ful1">
              <li>What we do</li>
              <li>Community First</li>
              <li>Our model</li>
              <li>How we grow</li>
              <li>Insights Library</li>
            </ul>
            <ul className="ful1">
              <li>Who we are</li>
              <li>Our Impact</li>
              <li>Press and Awards</li>
              <li>Board and Advisory</li>
              <li>Reports</li>
            </ul>
            <ul className="ful1">
              <li>Youth empowerment</li>
              <li>Girl child empowerment</li>
              <li>Women welfare development</li>
              <li>Mentorship programme</li>
            </ul>
            <div className="ful2">
              <h4>Contact and Physical Information</h4>
              <span>Tulia Foundation</span>
              <span>Kibera Drive, FPFK Church, Kibera</span>
              <span>admin@tuliafoundation.org</span>
              <span>Tel: +254795484304</span>
              <span>P.O. Box 44965-00100</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          <ul className="ft-lk">
            <li>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-rss"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-envelope-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft2">
        <span>© 2020 Tulia Foundation. All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default App;
