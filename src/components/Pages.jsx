import { Outlet } from "react-router-dom";
import Tabs from "./Tabs";

function Pages() {
  return (
    <div className=" w-full overflow-x-hidden bg-mainBg">
      <Tabs />
      <section className="h-[85vh] overflow-y-auto bg-mainBg">
        <Outlet />
      </section>
    </div>
  );
}

export default Pages;
