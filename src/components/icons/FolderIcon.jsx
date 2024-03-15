import { FaFolder } from "react-icons/fa";

const FolderIcon = ({ props, size = 22 }) => {
  return (
    <span
      className={`material-symbols-outlined text-gray-400 ${props} flex items-center justify-center`}
    >
      <FaFolder size={size} />
    </span>
  );
};

export default FolderIcon;
