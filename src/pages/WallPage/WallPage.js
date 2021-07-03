import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, getMessages } from "../../data/actions";
import { Button, MessageItem } from "components";

import styles from "./wallPage.module.scss";

const WallPage = () => {
  const messagesFromDB = useSelector((store) => store.messages);
  const cookie = useSelector((store) => store.cookie);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setInterval(() => dispatch(getMessages()), 4000);
  }, []);

  const vievMessages = !messagesFromDB
    ? ""
    : messagesFromDB.map((item) => (
        <MessageItem key={item._id} name={item.name} message={item.message} />
      ));

  const handleSetMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleOnSubmitMessage = (e) => {
    e.preventDefault();
    const messageObj = {
      name: cookie,
      message,
    };
    dispatch(addMessage(messageObj));
    setMessage("");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.messages}>{vievMessages}</div>
        <div className={styles.formMessage}>
          <form onSubmit={handleOnSubmitMessage}>
            <textarea
              placeholder="Napisz coś..."
              value={message}
              onChange={handleSetMessage}
            />
            <div>
              <Button name="wyślij" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WallPage;
