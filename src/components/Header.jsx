import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// Components
import ThemeToggle from "./modals/ThemeToggle";
import MeetDeveloper from "./modals/MeetDeveloper";

function Header({ show }) {
  const [meetDeveloper, setMeetDeveloper] = useState(false);

  return (
    show && (
      <Fragment>
        <header className="py-4 flex items-center justify-between">
          <Link
            className="flex items-center gap-3 text-text hover:text-accent transition-all"
            to={"/"}
            title="logo link"
          >
            <i
              title="logo bag icon"
              className="fa-solid fa-bag-shopping text-xl sm:text-3xl text-accent"
            ></i>
            <h1
              title="big bucket"
              className="text-2xl sm:text-3xl tracking-wide font-bold"
            >
              <span className="max-[480px]:hidden">Big Bucket</span>
              <span className="min-[480px]:hidden">BB</span>
            </h1>
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMeetDeveloper(!meetDeveloper)}
              className="flex items-center gap-2 group tracking-wide font-medium sm:text-lg hover:text-accent transition-all"
              title="meet devloper - Abhishek"
            >
              <span>Meet Developer</span>
              <i className="fa-regular fa-user group-hover:hidden text-sm"></i>
              <i className="fa-solid fa-user group-hover:block hidden text-sm"></i>
            </button>
            {meetDeveloper && <MeetDeveloper close={setMeetDeveloper} />}

            <ThemeToggle />
          </div>
        </header>
        <div className="h-[1px] w-full my-2 bg-text" />
      </Fragment>
    )
  );
}

export default Header;
