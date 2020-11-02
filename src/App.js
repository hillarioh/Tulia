import { div } from "prelude-ls";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";
import { loadCSS } from "fg-loadcss";

import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
//Image imports
//Slide Images
import slideA from "./assets/images/slide-a.jpg";
import slideB from "./assets/images/slide-b.jpg";
import slideC from "./assets/images/slide-c.jpg";
import slideD from "./assets/images/slide-d.jpg";
import slideE from "./assets/images/slide-e.jpg";
import slideF from "./assets/images/slide-f.jpg";

//Team Images
import teamA from "./assets/images/team-hilla.jpg"
import teamB from "./assets/images/team-anto.jpg"
import teamC from "./assets/images/team-titus.jpg"
import teamD from "./assets/images/team-joy.jpg"
import teamE from "./assets/images/team-fai.jpg"

//Feed images
import feed1 from "./assets/images/feed1.jpg"
import feed2 from "./assets/images/feed2.jpeg"
import feed3 from "./assets/images/feed3.jpeg"


//Peer educators image
import peer1 from "./assets/images/peer1.jpg"
import peer2 from "./assets/images/peer2.jpg"

//Empowerment
import emp1 from "./assets/images/emp1.jpg"
import emp2 from "./assets/images/emp2.jpeg"
import emp3 from "./assets/images/emp3.jpeg"

//Agriculture pics
import agr1 from "./assets/images/agr1.jpg"
import agr2 from "./assets/images/agr2.jpg"
import agr3 from "./assets/images/agr3.jpg"
import agr4 from "./assets/images/agr4.jpg"

import logo from "./assets/images/logo.png";
import onee from "./assets/images/onee.jpg";
import twoo from "./assets/images/twoo.jpg";
import threee from "./assets/images/threee.jpg";
import fourr from "./assets/images/fourr.jpg";
import fivee from "./assets/images/fivee.jpg";
import sixx from "./assets/images/sixx.jpg";
import sevenn from "./assets/images/sevenn.jpg";
import eight from "./assets/images/eight.jpg";
import nine from "./assets/images/nine.jpg";
import ten from "./assets/images/ten.jpg";
import eleven from "./assets/images/eleven.jpg";
import twelve from "./assets/images/twelve.jpg";
import thirteen from "./assets/images/thirteen.jpg";
import abbt from "./assets/images/all.png";
import Gallery from "react-grid-gallery";

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

const IMAGES = [
  {
    src: onee,
    thumbnail: onee,
    thumbnailWidth: 248,
    thumbnailHeight: 320,
    caption: "empowerment",
  },
  {
    src: twoo,
    thumbnail: twoo,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "empowerment",
  },
  {
    src: threee,
    thumbnail: threee,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "empowerment",
  },
  {
    src: fourr,
    thumbnail: fourr,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "empowerment",
  },
  {
    src: fivee,
    thumbnail: fivee,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "empowerment",
  },
  {
    src: sixx,
    thumbnail: sixx,
    thumbnailWidth: 320,
    thumbnailHeight: 183,
    caption: "empowerment",
  },
  {
    src: sevenn,
    thumbnail: sevenn,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    caption: "empowerment",
  },
  {
    src: eight,
    thumbnail: eight,
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: "empowerment",
  },
  {
    src: nine,
    thumbnail: nine,
    thumbnailWidth: 320,
    thumbnailHeight: 148,
    caption: "empowerment",
  },
  {
    src: ten,
    thumbnail: ten,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "empowerment",
  },
  {
    src: twelve,
    alt: "Big Ben - London",
    thumbnail: twelve,
    thumbnailWidth: 248,
    thumbnailHeight: 320,
    caption: "empowerment",
  },
  {
    src: eleven,
    alt: "Red Zone - Paris",
    thumbnail: eleven,
    thumbnailWidth: 320,
    thumbnailHeight: 113,
    caption: "empowerment",
  },
  {
    src: thirteen,
    alt: "Wood Glass",
    thumbnail: thirteen,
    thumbnailWidth: 313,
    thumbnailHeight: 320,
    caption: "empowerment",
  },
];

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/covid" exact component={Covid} />
        <Route path="/education" exact component={Education} />
        <Route path="/feeding" exact component={Feeding} />
        <Route path="/gallerys" exact component={Gallerys} />
        <Route path="/program" exact component={Program} />
        <Route path="/agriculture" exact component={Agriculture} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/empower" exact component={Empower} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
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
            <SwiperSlide>
              <div>
                <img src={slideA} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideB} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideC} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideD} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideE} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={slideF} alt="" style={{ width: "100%" }}></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section className="over">
        <div className="overview ov-1">
          <Link className="over-head" to="/program">
            <h2>What we do</h2>
            <div className="hint"></div>
            <p className="over-content">
              We Turn lives around in the community through various program
              running under our chain.
            </p>
          </Link>
        </div>

        <div className="overview ov-2">
          <Link className="over-head" to="/education">
            <h2>Our Impact</h2>
            <div className="hint"></div>
            <p className="over-content">
              Our agenda entails creating positive impact through scuccess in
              our team.
            </p>
          </Link>
        </div>

        <div className="overview ov-3">
          <Link className="over-head" to="/contact">
            <h2>Work with Us</h2>
            <div className="hint"></div>
            <p className="over-content">Get in touch with us.</p>
          </Link>
        </div>
      </section>

      <section className="vision">
        <div className="vis-body">
          <h1>Delivering a Response to COVID-19</h1>
          <p>
           In a time of covid-19 global pandemic we are engaging the community
            to respond to effectively to curb the spread of the disease.
          </p>
          <Link to="/covid"><h3>Read More</h3></Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

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
function Contact() {
  window.scroll(0, 0);
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
function Donate() {
  window.scroll(0, 0);
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
            We have managed to partner with local organisation to provide food for families facing challenges during this corona pandemic.
            Also the feeding program success we have been able to have women
            who have join together to have a common goal and objectives This
            women have started forming saving group through our training and
            empowerment
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
function Gallerys() {
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
          <Gallery images={IMAGES} enableImageSelection={false} />
          <h1></h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function Program() {
  window.scroll(0, 0);
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      <div className="program">
        <div className="top-program">
          <h2 id="program">Our Programs</h2>
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

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.updateStuff = this.updateStuff.bind(this);
  }

  updateStuff() {
    let x = document.getElementById("res-nav");

    if (window.outerWidth < 992) {
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
  }

  render() {
    return (
      <nav className="nav">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="Organisation logo" />
          </Link>
          <div className="ham" onClick={this.updateStuff}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <ul id="res-nav">
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li id="nav-program" onClick={this.updateStuff} className="nav-link">
            <h3>
                Programs
            </h3>
            <div>
              <span>
                <Link onClick={this.updateStuff} to="/feeding">
                  Feeding program
                </Link>
              </span>
              <span>
                <Link onClick={this.updateStuff} to="/education">
                  Peer Counselling
                </Link>
              </span>
              <span>
                <Link onClick={this.updateStuff} to="/empower">
                  Empowerment
                </Link>
              </span>
              <span>
                <Link onClick={this.updateStuff} to="/agriculture">
                  Agricultural Activities
                </Link>
              </span>
            </div>
          </li>
          <li>
            <Link
              onClick={this.updateStuff}
              className="nav-link"
              to="/gallerys"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/covid">
              COVID-19
            </Link>
          </li>
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/donate">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
function Footer() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="ft1">
        <div className="ft-mission">
          <img src={logo} />
          <p>
            <b>Turning Lives Around Foundation</b> is a local program that aims
            at transforming and enlightening youths and women in urban slums by
            giving out opportunities, entrepreneurship skills and helping the
            community at large.
          </p>
        </div>
        <div className="ft-program">
          <h2> What we do</h2>
          <p>
            <Link to="/empower">Empowerment</Link>
          </p>
          <p>
            <Link to="/agriculture">Promote Agriculture</Link>
          </p>
          <p>
            <Link to="/sport">Teach Sports</Link>
          </p>
          <p>
            <Link to="/feeding">Feeding Programme</Link>
          </p>
        </div>
        <div className="ft-contact">
          <h2>Contact Information</h2>
          <p>Tulia Foundation</p>
          <p>Kibera Drive, FPFK Church, Kibera</p>
          <p>
            <a href="mailto:support@tuliafoundation.org">
              support@tuliafoundation.org
            </a>
          </p>
          <p>Tel: +254795484304, +254702338066</p>
          <p>P.O. Box 44965-00100</p>
          <p>Nairobi, Kenya</p>
        </div>
        <div className="ft-form">
          <h2>Email newsletter</h2>
          <TextField
            className="jerry"
            variant="outlined"
            label="Email Address"
            type="email"
            color="primary"
            placeholder="example@example.com"
          />
          <TextField
            className="jerry"
            variant="outlined"
            label="First Name"
            type="text"
            color="primary"
            placeholder="First Name"
          />
          <TextField
            className="jerry"
            variant="outlined"
            label="Last Name"
            type="text"
            color="primary"
            placeholder="Last Name"
          />
          <h4>Subscribe</h4>
        </div>
      </div>
      <div className="ft2">
        <span>© 2020 Tulia Foundation. All Rights Reserved</span>
        <ul className="ft-lk">
          <li>
            <a href="#">
              <Icon className="fab fa-facebook-square ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-twitter ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-youtube ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-instagram ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-pinterest-p ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fas fa-rss ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon
                style={{ fontSize: 20 }}
                className="fas fa-envelope-square ft-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default App;
