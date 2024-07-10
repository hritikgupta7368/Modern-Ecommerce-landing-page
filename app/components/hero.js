import React from "react";

import "../styles/hero.css";
import Hero_button from "./buttons";

const Hero = () => {
  return (
    <section className="hero container-space-between">
      <section className="hero-main container-space-between-column">
        <div />
        <div className="hero-text-container ">
          <p className="hero-subheading">Natural magic</p>
          <p className="hero-heading">
            Unlock your inner beauty with our self care collection{" "}
          </p>
        </div>
        <div className="hero-button-container hide-768-plus">
          <Hero_button size="medium" />
        </div>
        <div className="relative container-space-between hero-button-container-2 hide-768 ">
          <Hero_button size="medium" />
          <div />
          <div className="absolute right-0 bottom-0">
            <p className="w-60 h-32  text-right pr-3">
              /Say goodbye to dryness and dullness with our fast-absorbing face
              oil.
            </p>
          </div>
        </div>
      </section>

      <section className="hero-image">
        <img src="/hero_image.png" />
      </section>
    </section>
  );
};

export default Hero;
