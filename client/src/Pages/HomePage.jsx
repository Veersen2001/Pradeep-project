import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import heroPng from "../assets/images/logo1.png";

export default function HomePage() {
  return (
    <Layout>
      <section className="md:py-10 py-7 text-white flex md:flex-row flex-col-reverse items-center justify-center md:gap-10 gap-7 md:px-16 px-6 min-h-[90vh]" id="home_section">
        <div className="md:w-1/2 w-full space-y-7">
          <h1 className="md:text-5xl text-6xl font-semibold text-gray-200 dark:text-gray-200">
            Welcome To  
            <span className="text-blue-500 font-bold font-open-sans">&nbsp;Rostris.com</span>
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 font-inter">
            your gateway to seamless learning! Step into a world where education meets innovation, where knowledge is cultivated and skills are honed.
             Rostris.com is your ultimate destination for all things learning management.
          </p>

          <div className="space-x-6 flex">
            <Link to="/courses">
              <button className="bg-blue-500 font-inter font-[400] text-slate-100 dark:text-white md:px-5 px-3 md:py-3 py-3 rounded-md  md:text-lg text-base cursor-pointer transition-all ease-in-out duration-300">
                Explore courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-blue-500 text-white dark:text-white px-5 py-3 rounded-md font-semibold md:text-lg text-base cursor-pointer  transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-1/7 flex items-center justify-center">
           <img alt="homepage image" src={heroPng}  />
        </div>


        
      </section>
    </Layout>
  );
}
