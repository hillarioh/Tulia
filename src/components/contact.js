import React from 'react';
import Footer from './footer';

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

export default Contact