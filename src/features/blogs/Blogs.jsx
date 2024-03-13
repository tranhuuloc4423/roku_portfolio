import { Helmet, HelmetProvider } from "react-helmet-async";
import blogs from "./blogsapi";
import BlogCard from "./BlogCard";

function Blogs() {
  // const Blogs = useLoaderData();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Roku | Blogs</title>
      </Helmet>
      <div className="p-8">
        <h1 className="pb-8 text-3xl font-semibold text-textColor">
          My Recent Blogs
        </h1>
        {blogs.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>
    </HelmetProvider>
  );
}

export default Blogs;
