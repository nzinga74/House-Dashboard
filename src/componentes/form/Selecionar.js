import styles from "./Selecionar.module.css";
import { Formik, Form, Field } from "formik";

function Selecionar({text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <options>Selecione uma opção</options>
      </select>
    </div>
  );
}

export default Selecionar;
