import React, { useState, useEffect } from "react";
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero/Hero";
gsap.registerPlugin(ScrollTrigger);
import { fetchReviews, postReview } from "./api";
import { images } from "./assets/images/Image.ts";

const App = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() === "") return;

    postReview(review)
      .then(() => {
        setReviews([...reviews, { text: review }]);
        setReview("");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchReviews()
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');
    sections.forEach(section => {
      gsap.fromTo(section, { y: 40, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none reverse' }
      });

      const children = section.querySelectorAll('.reveal-child');
      if (children.length > 0) {
        gsap.fromTo(children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' } });
      }
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="min-h-screen">
      <nav>
        <div className="p-4 flex-row bg-gray-300 flex justify-between items-center">
          <h className="font-semibold text-2xl">Lester Nazareth</h>
          <div>
            <ul className=" flex items-center flex-row px-4">
              <li className="px-4">
                <a
                  href="#about"
                  className="items-center gap-2 flex hover:scale-110"
                >
                  About
                  <img
                    src={images.AboutUs}
                    alt="About"
                    className="inline w-5 h-5  "
                  />
                </a>
              </li>
              <li className="px-4">
                <a
                  href="#projects"
                  className="items-center gap-2 flex hover:scale-110"
                >
                  Projects
                  <img
                    src={images.Project}
                    alt="Projects"
                    className="inline w-5 h-5  "
                  />
                </a>
              </li>
              <li className="px-4">
                <a
                  href="#contact"
                  className="items-center gap-2 flex hover:scale-110"
                >
                  Contact
                  <img
                    src={images.Contact}
                    alt="Contact"
                    title="Contact"
                    className="inline w-5 h-5 "
                  />
                </a>
              </li>

              <li className="px-4">
                <a
                  href="#experience"
                  className="items-center gap-2 flex  hover:scale-110"
                >
                  Experience
                  <img
                    src={images.Experience}
                    alt="Experience"
                    className="inline w-5 h-5  "
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Hero />
        <h1>Hi, I'm Lester</h1>
        <p>React Developer | Problem Solver | Tech Enthusiast</p>
        <a href="#projects" className="bg-gray-800 px-4 py-2 mt-4 inline-block rounded-md font-semibold hover:bg-gray-200">
          View My Work
        </a>
      </header>

      <section id="about" className="p-8 border-b elevation-2 shadow-md reveal">
        <h2 className="font-semibold text-2xl">About Me</h2>
        <p className="text-justify p-1">
          I'm a passionate and detail-oriented software developer focused on
          creating modern, user-friendly web applications using{" "}
          <strong>React</strong>, <strong>Node.js</strong>, and other
          cutting-edge technologies. I enjoy transforming complex problems into
          intuitive and visually appealing interfaces. My experience includes
          building responsive designs, integrating APIs, and optimizing
          performance for better user experiences.
        </p>
        <p className="text-justify p-1">
          I’m constantly learning new technologies to improve my development
          workflow and stay current with industry trends. I have a strong
          interest in front-end development, UI/UX design, and real-time
          data-driven applications.
        </p>
        <p className="text-justify p-1">
          Beyond coding, I enjoy collaborating with cross-functional teams,
          mentoring junior developers, and contributing to open-source projects.
          My goal is to build impactful software that simplifies everyday tasks
          and creates positive user experiences.
        </p>
      </section>

      <section id="projects" className="p-8 bg-gradient-to-r from-cyan-500 to-purple-800  reveal">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="flex justify-between gap-3">
        <div className=" p-2 elevation-2 shadow-md reveal-child ">
            <h3 className="font-semibold">Smart Nutrition App</h3>
            <p>A real-time health insights app built with React Native.</p>
          </div>
        <div className="p-2  elevation-2 shadow-md  reveal-child">
            <h3 className="font-semibold">Weather Dashboard</h3>
            <p>Displays live weather updates using an external API.</p>
          </div>
        <div className="p-2  elevation-2 shadow-md reveal-child ">
            <h3 className="font-semibold">Portfolio Website</h3>
            <p>Personal website to showcase my work and skills.</p>
          </div>
        </div>
      </section>

      <section id="experience" className="p-8 border-t elevation-2 shadow-md reveal">
        <div className=" ">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>

          {/* Experience Card */}
          <div className="bg-white shadow-md rounded-xl border border-gray-200 reveal-child ">
            <div className="p-6">
              <h3 className="text-xl font-semibold">React Native Developer</h3>
              <p className="text-gray-700 font-medium">Yucca IT Solutions</p>

              {/* Short description */}
              <p className="text-gray-600 mt-4">
                React Native Developer at Yucca IT Solutions, contributing to
                scalable mobile applications. Built UI components, integrated
                REST APIs, optimized performance, and worked closely with
                designers and backend teams. Gained hands-on experience in
                mobile architecture, state management, debugging, and deploying
                features for real-world applications.
              </p>

              {/* More / Less Button */}
              <button
                onClick={() => setOpen(!open)}
                className="mt-3 text-blue-600 font-semibold hover:underline"
              >
                {open ? "Show Less" : "Show More"}
              </button>

              {/* Expandable details */}
              {open && (
                <div className="mt-4 text-gray-700 space-y-2 animate-fadeIn">
                  <p>
                    • Developed cross-platform mobile screens with React Native.
                  </p>
                  <p>
                    • Implemented QR code scanning, camera access & file upload
                    features.
                  </p>
                  <p>
                    • Worked with APIs, Redux state management & modular UI
                    components.
                  </p>
                  <p>
                    • Improved performance and UI responsiveness for better UX.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-8 border-t elevation-2 shadow-md reveal">
        <h2 className="font-semibold text-2xl">Contact</h2>
        <p>Let's work together! Reach out via email</p>
        <p>ph no: +91 6366288649</p>
        <a href="mailto:lester@example.com" className="btn">
          Email: nazarethlester@gmail.com
        </a>
      </section>

      <section id="reviews" className="p-8 reveal">
        <h2 className="font-semibold text-2xl">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Write a review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="border border-rounded-lg p-2 flex  border-gray-300"
          />
          <button
            type="submit"
            className=" px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold  rounded-md"
          >
            Post
          </button>
        </form>

        <div className="review-list">
          {reviews.length === 0 ? (
            <p>No reviews yet — be the first!</p>
          ) : (
            reviews.map((r, index) => (
              <div key={index} className="review-card">
                {r.text}
              </div>
            ))
          )}
        </div>
      </section>

      <footer className="bg-gray-500 p-8 ">
        <div className="items-center justify-center flex flex-1">
          <p>© {new Date().getFullYear()} Lester Nazareth</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
