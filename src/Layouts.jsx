import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Breadcrumb, Breadcrumbs } from "./components/tiny/Breadcrumbs";

const Layout = ({
  breadcrumb = { show: true, type: "gen" },
  header = true,
  footer = true,
}) => {
  return (
    <Fragment>
       <Header show={header} />
      <main className="min-h-screen">
        {breadcrumb.show &&
          (breadcrumb.type === "general" ? <Breadcrumbs /> : <Breadcrumb />)}
        <Outlet />
      </main>
      {footer && <Footer />}
    </Fragment>
  );
};

export default Layout;
