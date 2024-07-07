import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useTheme } from "../../Theme";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { isDarkMode } = useTheme();
  return (
    <section
      id="contact"
      className={`py-12 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 p-4">
            <form
              name="contact"
              method="POST"
              className=" p-6 rounded-lg shadow-md"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label
                  className={`block text-sm font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  type="text"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs italic">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className={`block text-sm font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className={`block text-sm font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  rows="5"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    isDarkMode ? "hover:bg-blue-800" : "hover:bg-blue-600"
                  }`}
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className=" p-6 rounded-lg shadow-md">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Details
              </h3>

              <div className="flex space-x-4 mt-4">
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-700"
                  } mb-4`}
                >
                  <a
                    href="mailto:syedfarhan596@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-700"
                    } hover:text-gray-900`}
                  >
                    <MdOutlineEmail className="w-12 h-12" />
                  </a>
                </p>
                <a
                  href="https://www.instagram.com/syedfarhan.596/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-700"
                  } hover:text-gray-900`}
                >
                  <CiInstagram className="w-12 h-12" />
                </a>
                <a
                  href="https://t.me/Syedfarhan596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-700"
                  } hover:text-gray-900`}
                >
                  <FaTelegram className="w-12 h-12" />
                </a>
                <a
                  href="https://www.linkedin.com/in/syedfarhan596/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-700"
                  } hover:text-gray-900`}
                >
                  <CiLinkedin className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
