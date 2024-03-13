import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
// import json_icon from "../assets/icons/json_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import { Link, useLocation } from "react-router-dom";
import FolderIcon from "./icons/FolderIcon";

const TabsItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: `${react_icon}`,
  },
  {
    name: "about.html",
    path: "/about",
    icon: `${html_icon}`,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: `${css_icon}`,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: `${js_icon}`,
  },
  {
    name: "blogs.folder",
    path: "/blogs",
    icon: <FolderIcon props={"scale-[0.85]"} />,
  },
  {
    name: "github.md",
    path: "/github",
    icon: `${markdown_icon}`,
  },
];
function Tabs() {
  const location = useLocation();
  console.log(location.pathname.split("/"));
  return (
    <div className="flex overflow-x-auto bg-tabsBg">
      {TabsItems.map((tab) => {
        return (
          <Link
            key={tab.name}
            to={`${tab.path}`}
            className={`flex ${
              location.pathname === tab.path
                ? " border-t-2 border-t-accentColor bg-tabActiveBg"
                : "border-2 bg-tabBg"
            }   min-w-max gap-x-1  border-tabBorder  px-3 text-textColor   md:py-1`}
          >
            {tab.name === "blogs.folder" ? (
              tab.icon
            ) : (
              <img src={tab.icon} height={20} width={20} alt="react-icon" />
            )}
            <p className=" text-lg font-medium">{tab.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Tabs;
