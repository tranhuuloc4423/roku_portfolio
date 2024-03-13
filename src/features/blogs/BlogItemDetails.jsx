import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router";
import blogs from "./blogsapi";
import { useState } from "react";
import Expand from "../../components/icons/Expand";

function BlogItemDetails() {
  const [expandedItems, setExpandedItems] = useState([]);
  const location = useLocation();
  const blogId = Number(location.pathname.split("/")[2]);
  const blogDetailId = Number(location.pathname.split("/")[3]);
  const blogDetail = blogs
    .find((item) => item?.id === blogId)
    ?.children.find((child) => child.id === blogDetailId);

  const handleItemClick = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Roku | BlogItemDetails</title>
      </Helmet>
      <div className="select-none  p-8 text-white">
        <h1 className="text-center text-5xl font-bold">{blogDetail.title}</h1>
        {blogDetail.main_content.map((item, index) => {
          const expand = expandedItems.includes(index);
          return (
            <div key={item.id}>
              <h3
                className="flex cursor-pointer items-center border-b-[1px] border-gray-600 p-4 text-3xl font-semibold text-accentColor"
                onClick={() => handleItemClick(index)}
              >
                {item.title}
                <div className="flex scale-150 items-center justify-center pl-2">
                  {expand ? <Expand props={"rotate-[-90deg]"} /> : <Expand />}
                </div>
              </h3>
              <p
                className={` ml-4 p-4 text-xl ${expand ? "expand animate-expand" : "animate-collapse collapse"}`}
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </HelmetProvider>
  );
}

export default BlogItemDetails;
