import { FaFolderOpen } from "react-icons/fa";

const FolderOpenIcon = ({ props, size = 22 }) => {
  return (
    <span className={`text-gray-400 ${props} flex items-center justify-center`}>
      <FaFolderOpen size={size} />
    </span>
  );
};

export default FolderOpenIcon;
