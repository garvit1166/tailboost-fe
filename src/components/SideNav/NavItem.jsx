import React from "react";

function NavItem({ nav, showSideNav }) {
  return (
    <div>
      <button
        key={nav.id}
        className="bg-transparent w-100 border-0 my-2 text-white fs-5 text-start"
      >
        <a href={nav.link} className="nav-link">
          <nav.icon className={`mx-2 ${showSideNav ? "fs-5" : "fs-3"}`} />
          <p className={` fs-6 d-inline ms-2 ${showSideNav ? "" : "d-none"}`}>
            {nav.name}
          </p>
        </a>
      </button>
    </div>
  );
}

export default NavItem;
