import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import spoon from "../../Asset/spoon.png";
import GalleryImages from "../Gallery/GalleryImages";
import { motion } from "framer-motion";

const Gallery = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);

    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="app__gallery gallery__bg section__padding">
      <div className="app__gallery-content">
        <div className="app__gallery-content-left">
          <div className="app__gallery-content-left-insta">
            <p className="p__cormorant">Instagram</p>
            <img src={spoon} alt="spoon" />
          </div>

          <h1 className="app__gallery-content-left-h1">Photo Gallery</h1>

          <p className="gallery__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>

          <button type="submit" className="app__gallery-content-left-btn">
            View More
          </button>
        </div>

        {/*React slider */}

        <motion.div ref={carousel} className="app__gallery-content-right">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="app__gallery-content-right-images"
          >
            {GalleryImages.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="gallery images" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
