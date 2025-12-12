import { Link } from "react-router-dom";

const MenuItem = ({ path, label, onClick, className }) => (
  <li>
    <Link to={path} onClick={onClick} className={className}>
      {label}
    </Link>
  </li>
);

export default MenuItem;
