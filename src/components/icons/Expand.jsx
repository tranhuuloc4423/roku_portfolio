import { MdExpandMore } from "react-icons/md";

const Expand = ({ props, size = 24 }) => {
  return (
    <span className={`${props}`}>
      <MdExpandMore size={size} />
    </span>
  );
};

export default Expand;
