import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import { createPortal } from "react-dom";
import { closeModal } from "../../utils/closeModal";

// Images
import profilePic from "../../assets/img/profile.jpg";

export default function MeetDeveloper({ close }) {
  // Close Modal
  const documentRef = useRef(null);
  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    closeModal(documentRef, close);
  }, []);

  return createPortal(
    <div
      ref={documentRef}
      className="flex items-center justify-center fixed top-0 left-0 min-h-screen w-full bg-secondary/70"
    >
      <div className="relative min-w-96 max-w-[450px] px-6 py-8 rounded-lg bg-background">
        <div className="absolute right-4 top-3 z-20">
          <button
            onClick={() => {
              document.documentElement.classList.remove("overflow-hidden");
              close(false);
            }}
            className="size-8 bg-slate-800 text-slate-200 hover:text-red-500 rounded-full"
          >
            <span className="sr-only">close</span>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="w-full max-h-[500px]">
          <div className="my-4">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className="absolute size-32 rounded-full bg-primary blur-md" />
              <img
                src={profilePic}
                alt="abhishek profile pic"
                className="relative size-32 rounded-full ring-4 ring-slate-200"
              />
            </div>
          </div>
          <div className="text-center pt-2 my-4">
            <h2 className="text-3xl tracking-wider font-bold text-primary">
              ABHISHEK
            </h2>
            <h3 className="text-lg mt-2 tracking-wide font-medium text-text/70">
              Full Stack Web Developer
            </h3>
            <div className="my-8 flex items-center justify-center gap-5">
              {profileLinks.map(({ name, link, icon }) => (
                <Link
                  key={link}
                  to={link}
                  target="_blank"
                  title={name}
                  className="size-10 group ring-2 ring-text hover:bg-secondary grid place-items-center rounded-full transition-all"
                >
                  <i
                    className={`${icon} text-lg group-hover:scale-125 group-hover:rotate-12 transition-all`}
                  ></i>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to={"https://abhi.shre.in/"}
                target="_blank"
                className="text-lg font-medium group tracking-wide py-2 px-6 hover:bg-primary hover:text-background rounded-full transition-all"
              >
                <span className="mr-2">see my portfolio</span>
                <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition duration-300"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("big-portal")
  );
}

// Profile Links
const profileLinks = [
  {
    name: "Instagram",
    link: "https://instagram.com/abhii.js",
    icon: "fa-brands fa-instagram",
  },
  {
    name: "Twitter X",
    link: "https://x.com/abhiijs",
    icon: "fa-brands fa-x-twitter",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/AbhiMehrr",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "Github",
    link: "https://github.com/abhimehrr",
    icon: "fa-brands fa-github",
  },
];
