import styles from "./Button.module.css";
import colors from "../../styles/color.module.css";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
  linkTo: string;
  label: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ linkTo, label }) => {
  return (
    <Link
      to={linkTo}
      className={`${styles.button} ${colors.bgPrimary} ${colors.colorDark}`}
    >
      {label}
      <span>&#8594;</span>
    </Link>
  );
};
export default ButtonLink;
