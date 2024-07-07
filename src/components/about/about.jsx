import React from "react";
import SyedImage from "../../assets/personal/syed.jpg";
import ResumePdf from "../../assets/personal/SyedFarhan_resume.pdf";

const About = () => {
  const downloadResume = () => {
    window.open(ResumePdf, "_blank");
  };

  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={SyedImage}
              alt="Syed Farhan"
              className="rounded-lg shadow-md object-contain "
              style={{ maxHeight: "400px" }} // Adjust max height as needed
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              I'm Syed Farhan, a self-taught web and mobile app developer deeply
              passionate about the intersection of design, technology, and
              innovation. From conceptualization to implementation, I specialize
              in transforming ideas into high-performance software applications.
              My focus lies in backend development, where I enjoy tackling
              intricate challenges and optimizing functionality. I strive to
              blend intuitive user experience with robust, reusable code,
              ensuring every project delivers both usability and efficiency.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={downloadResume}
            >
              See Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
