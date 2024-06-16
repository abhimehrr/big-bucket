import React, { Fragment } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export function Breadcrumbs() {
  const location = useLocation();
  const bread = location?.pathname?.split("/")?.filter((f) => f);

  return (
    <div className="pt-2 flex flex-wrap items-center gap-2 tracking-wide">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-home text-text/70 text-sm"></i>
        {bread?.length > 0 ? (
          <Fragment>
            <Link to={"/"} className="font-medium hover:text-primary">
              Home
            </Link>
            <i className="fa-solid fa-greater-than text-xs"></i>
          </Fragment>
        ) : (
          <button className="font-medium hover:text-primary">Home</button>
        )}
      </div>
      {bread?.map((path, i) => (
        <div key={path} className="flex items-center gap-2">
          {bread.length === i + 1 ? (
            <button className="font-medium capitalize hover:text-primary">
              {path?.split("-")?.join(" ")}
            </button>
          ) : (
            <Fragment>
              <Link
                to={path}
                className="font-medium capitalize hover:text-primary"
              >
                {path?.split("-")?.join(" ")}
              </Link>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
}

export function Breadcrumb() {
  const location = useLocation();
  const bread = location?.pathname?.split("/")?.filter((f) => f);
  const [query] = useSearchParams();

  return (
    <div className="pt-2 flex flex-wrap items-center gap-2 tracking-wide">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-home text-text/70 text-sm"></i>
        {bread?.length > 0 ? (
          <Fragment>
            <Link to={"/"} className="font-medium hover:text-primary">
              Home
            </Link>
            <i className="fa-solid fa-greater-than text-xs"></i>
          </Fragment>
        ) : (
          <button className="font-medium hover:text-primary">Home</button>
        )}
      </div>
      {bread?.map((path, i) => (
        <div key={path} className="flex items-center gap-2">
          {bread.length === i + 1 ? (
            <button className="font-medium capitalize hover:text-primary">
              {query.get("name")}
            </button>
          ) : (
            <Fragment>
              <Link
                to={path === "todo" ? "/" : path}
                className="font-medium capitalize hover:text-primary"
              >
                {path}
              </Link>
              <i className="fa-solid fa-greater-than text-xs"></i>
            </Fragment>
          )}
        </div>
      ))}
    </div>
  );
}
