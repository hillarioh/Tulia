import React from 'react';
import Gallery from "react-grid-gallery";
import Footer from './footer';
import IMAGES from './images';

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

export default Gallerys;