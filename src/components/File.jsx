import { Link } from "react-router-dom";

const File = ({ data }) => {
  return (
    <Link
      to={`${data.path}`}
      key={data.name}
      className="flex gap-x-1 pl-7 hover:bg-explorerHoverBg"
    >
      <img src={data.icon} alt={data.name} height={20} width={20} />
      <p className="desc_limit text-lg font-medium">{data.name}</p>
    </Link>
  );
};

export default File;
