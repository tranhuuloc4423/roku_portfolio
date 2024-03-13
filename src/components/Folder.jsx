import { Link } from "react-router-dom";
import File from "./File";
import { useState } from "react";
import Expand from "./icons/Expand";
import FolderOpenIcon from "./icons/FolderOpenIcon";
import FolderIcon from "./icons/FolderIcon";
// import ChevronRight from "./icons/ChevronRight";

const Folder = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <Link
        to={`${data.path}`}
        key={data.name}
        className="flex items-center gap-x-1 transition-all hover:bg-explorerHoverBg"
        onClick={() => setShow(!show)}
      >
        {show ? <Expand /> : <Expand props={"rotate-[-90deg]"} />}
        {data?.icon ? (
          <img src={data.icon} alt={data.name} height={20} width={20} />
        ) : show ? (
          <FolderOpenIcon props={`scale-[0.85]`} />
        ) : (
          <FolderIcon props={`scale-[0.85]`} />
        )}
        <p className="desc_limit text-lg font-medium">{data.name}</p>
      </Link>
      {show && (
        <div className="pl-4">
          {data?.child &&
            data.child.map((item, index) => {
              if (item?.child) {
                return <Folder key={index} data={item} />;
              } else {
                return <File key={index} data={item} />;
              }
            })}
        </div>
      )}
    </div>
  );
};

export default Folder;
