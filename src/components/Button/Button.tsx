import styles from "./Button.module.css";
import colors from "../../styles/color.module.css";

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button
      className={`${styles.button} ${colors.bgPrimary} ${colors.colorDark}`}
    >
      {label}
      <span>&#8594;</span>
    </button>
  );
};

export default Button;
