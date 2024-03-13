import Code from "./icons/CodeIcon";
import Files from "./icons/FilesIcon";
import Github from "./icons/GithubIcon";
import Pencil from "./icons/Pencil";
import Mail from "./icons/MailIcon";
import Account from "./icons/AccountIcon";
import Settings from "./icons/SettingsIcon";
import { Link, useLocation } from "react-router-dom";
const sidebarTopItems = [
  {
    Icon: Files,
    path: "/",
  },
  {
    Icon: Github,
    path: "/github",
  },
  {
    Icon: Code,
    path: "/projects",
  },
  {
    Icon: Pencil,
    path: "/blogs",
  },
  {
    Icon: Mail,
    path: "/contact",
  },
];
const sidebarBottomItems = [
  {
    Icon: Account,
    path: "/about",
  },
  {
    Icon: Settings,
    path: "/settings",
  },
];
function SideBar() {
  const location = useLocation();
  return (
    <aside className="flex w-[4.2vw] min-w-[40px] flex-col items-center justify-between bg-sidebarBg md:min-h-[calc(100vh-65px)]">
      <div className="flex w-full flex-col items-center justify-center gap-y-1 md:gap-y-3">
        {sidebarTopItems.map(({ Icon, path }) => {
          return (
            <Link
              to={`${path}`}
              key={path}
              className={`${
                location.pathname === path
                  ? "border-l-2 border-accentColor"
                  : ""
              } flex w-full items-center justify-center py-4 max-sm:pl-2`}
            >
              <Icon
                fill={
                  location.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-y-3  ">
        {sidebarBottomItems.map(({ Icon, path }) => {
          return (
            <Link to={`${path}`} key={path}>
              <div className="p-2  max-sm:pl-2">
                <Icon
                  fill={
                    location.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                />
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
// h-[calc(100vh-38.5px)]
export default SideBar;
