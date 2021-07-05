import { useSelector } from "react-redux";
import styles from "./messageItem.module.scss";

const MessageItem = ({ name, message }) => {
  const cookie = useSelector((store) => store.cookie);
  const messageViev =
    name === cookie ? (
      <div className={styles.owner}>
        <div className={styles.inside}>
          <div>Ty</div>
          <p>{message}</p>
        </div>
      </div>
    ) : (
      <div className={styles.friend}>
        <div className={styles.inside}>
          <div>{name}</div>
          <p>{message}</p>
        </div>
      </div>
    );

  return <> {messageViev}</>;
};

export default MessageItem;
