import styles from "./FormElements.module.css";
import type { ReactNode } from "react";

type FormProps = {
  children: string | number | Array<ReactNode> | boolean | null | undefined;
};

const Form: React.FC<FormProps> = ({ children }) => {
  return <form className={`${styles.form}`}>{children}</form>;
};

export default Form;
