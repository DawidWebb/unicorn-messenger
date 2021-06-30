import styles from "./button.module.scss";

const Button = ({ name, type, id, onClick }) => {
  return (
    <button className={styles.button} type={type} id={id} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
