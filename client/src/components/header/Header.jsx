import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <>
      <div className="main-document-header-container">
        <header className="top-navigation">
          <ul className="container">
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/lang">Language</Link>
            </li>
            <li>
              <Link to="/lib">Library</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
          </ul>
        </header>
      </div>

      <Outlet />
    </>
  );
}
