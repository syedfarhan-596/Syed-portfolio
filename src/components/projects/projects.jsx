import React from "react";
import jobhuntImage from "../../assets/projects/job-hunt.png";
import cdiImage from "../../assets/projects/codefordigitalindia.png";
import ecommerceImage from "../../assets/projects/ecommerce.png";
import { useTheme } from "../../Theme";

const projects = [
  {
    name: "JobHunt",
    description:
      "Developed a comprehensive job portal web application, featuring essential functionalities such as job and company browsing, filtering, pagination, and job application tracking for users. Implemented user authentication with JWT (JSON Web Tokens) and integrated Material UI and Bootstrap for responsive and visually appealing user interfaces, ensuring a seamless user experience.",
    technologies: "NodeJs, ReactJs, MongoDB, ExpressJS",
    link: "https://github.com/syedfarhan-596",
    image: jobhuntImage,
  },
  {
    name: "Code For Digital India",
    description:
      "Developed a comprehensive internship management platform using the MERN stack, with user and admin dashboards for efficient state management and internship status updates. Deployed on Render and Netlify, with AWS S3 for storage. Utilized Mantine.dev for seamless component library integration, enhancing UI/UX across the application. Implemented a user management system with AWS S3 and Nodemailer, supporting registration, login, account recovery, profile updates, resume uploads, OTP verification, and admin functionalities for profile review and task assignment.",
    technologies: "NodeJs, ReactJs, MongoDB, ExpressJS, AWS",
    link: "https://codefordigitalindia-syed.netlify.app/",
    image: cdiImage,
  },
  {
    name: "E-commerce Website",
    description:
      "Developed an e-commerce website using the MERN stack, incorporating features such as product listings, user authentication, and shopping cart functionality. Implemented comprehensive user management, product search, and order processing to ensure a seamless shopping experience.",
    technologies: "NodeJs, ReactJs, MongoDB, ExpressJS",
    link: "https://github.com/syedfarhan-596",
    image: ecommerceImage,
  },
];

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-indigo-500 ${
                isDarkMode ? "border border-gray-700" : "border border-gray-300"
              } rounded-lg overflow-hidden`}
            >
              <div
                className={`bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-t-lg w-full h-48 object-cover mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <p
                  className="mb-4 overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {project.description}
                </p>
                <p className={"text-gray-800 mb-4"}>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
