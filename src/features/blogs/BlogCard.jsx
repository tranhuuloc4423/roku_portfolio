import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function BlogCard({ data }) {
  return (
    <Link
      to={`${data.link}`}
      className="flex max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg  transition-all hover:scale-[0.98] hover:shadow-lg"
    >
      <img
        src={data?.thumbnail}
        className="rounded-b-xl rounded-t-lg "
        alt=""
      />

      <div className="flex flex-col gap-y-2 p-4">
        <h2 className=" text-2xl font-semibold text-accentColor">
          {data.title}
        </h2>
        <p
          className=" blog_item_desc text-base font-medium text-white"
          title={data.desc}
        >
          {data.desc}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
