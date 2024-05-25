import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Fragment>
      <div className="h-[1px] w-full mt-10 bg-secondary" />
      <footer className="pt-5">
        <div className="mb-4 tracking-wide">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              className="font-medium text-text/50 hover:text-accent transition-all"
              to="/privacy-and-policy"
            >
              Privacy & Policy
            </Link>
            <i className="fa-solid fa-circle text-[7px] text-accent"></i>
            <Link
              className="font-medium text-text/50 hover:text-accent transition-all"
              to="mailto:abhias.dev@gmail.com"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="bg-secondary/20 w-full py-4 rounded-t-xl">
          <div className="text-text/50 text-justify tracking-wide flex flex-wrap items-center justify-center gap-2">
            <div className="whitespace-nowrap">
              <span>Crafted with dedication by</span>
              <Link
                to={"https://abhi.shre.in"}
                target="_blank"
                className="ml-2 hover:text-accent"
              >
                Abhishek.
              </Link>
            </div>
            <div className="font-mediums cursor-pointer whitespace-nowrap">
              Made with
              <i className="fa-solid mx-2 fa-heart text-red-500"></i>
              in India
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
