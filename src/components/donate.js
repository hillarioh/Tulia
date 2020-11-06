import React from 'react';
import Footer from './footer';

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

export default Donate;