import { Helmet, HelmetProvider } from "react-helmet-async";
import blogs from "./blogsapi";
import { Link, useLocation } from "react-router-dom";
// import { useEffect } from "react";
const BlogItem = () => {
  const location = useLocation();
  const blogId = Number(location.pathname.split("/")[2]);
  const blogItems = blogs.find((item) => item.id === blogId)?.children;
  return (
    <HelmetProvider>
      <Helmet>
        <title>Roku | Blogs</title>
      </Helmet>
      <div className="flex gap-6 p-8 sm:flex-col md:flex-row lg:flex-row">
        {blogItems.map((blogItem, index) => (
          <Link
            to={`${blogItem.link}`}
            key={index}
            className="cursor-pointer overflow-hidden rounded-md shadow-md transition-all hover:scale-[0.98] sm:w-full md:w-1/3 lg:w-1/5"
          >
            <img src={blogItem.thumbnail} alt="thumbnail" className="w-full" />
          </Link>
        ))}
      </div>
    </HelmetProvider>
  );
};

export default BlogItem;
