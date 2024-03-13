import { useState } from "react";
import react_icon from "../assets/icons/react_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import css_icon from "../assets/icons/css_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import json_icon from "../assets/icons/json_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
// import { Link } from "react-router-dom";
import File from "./File";
import Folder from "./Folder";
import Expand from "./icons/Expand";
const explorerItems = [
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
    child: [
      {
        name: "LTGTTB",
        path: "/blogs/1",
        child: [
          {
            name: "Giới thiệu Wokwi",
            path: "/blogs/1/0",
            icon: `${json_icon}`,
          },
          {
            name: "1.Giới thiệu Môn",
            path: "/blogs/1/1",
            icon: `${json_icon}`,
          },
          {
            name: "2.Lập trình GPIO",
            path: "/blogs/1/2",
            icon: `${json_icon}`,
          },
          {
            name: "3.Giao thức giao tiếp Serial - UART",
            path: "/blogs/1/3",
            icon: `${json_icon}`,
          },
        ],
      },
    ],
  },
  {
    name: "github.md",
    path: "/github",
    icon: `${markdown_icon}`,
  },
];
function Explorer() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex max-w-[250px] flex-col  items-start border-l-[1px] border-r-[1px] border-l-gray-700 border-r-gray-700 bg-explorerBg text-white max-sm:hidden">
      <h1 className="mt-4 pl-2 text-2xl font-medium uppercase">Explorer</h1>
      <div className="flex min-w-[15vw]  flex-col">
        <div
          className="flex cursor-pointer items-center pl-1 pt-2 "
          onClick={() => setShow(!show)}
        >
          <Expand props={show ? {} : "rotate-[-90deg]"} />
          <p htmlFor="portfolio-checkbox" className="text-lg font-semibold">
            PORTFOLIO
          </p>
        </div>
        {show && (
          <div className="">
            {explorerItems.map((item, index) => {
              if (item?.child) {
                return <Folder key={index} data={item} />;
              } else {
                return <File key={index} data={item} />;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;
