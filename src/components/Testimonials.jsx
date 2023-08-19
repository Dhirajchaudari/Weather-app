import React from "react";

// import component
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden">
            What other people says
          </h2>
          <p className="text-gray-500 subtitle">
            📣 Let their words tell the story! In this space, I proudly
            present the voices of those who've witnessed the magic we've crafted
            together. 🙌✨ Join me in celebrating our shared successes and the
            incredible relationships we've built along the way.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
