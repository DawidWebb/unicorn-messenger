import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, getMessages } from "../../data/actions";
import { Button, IconsBox, MessageItem } from "components";

import styles from "./wallPage.module.scss";

const WallPage = () => {
  const messagesFromDB = useSelector((store) => store.messages);
  const cookie = useSelector((store) => store.cookie);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");

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

  const handleOpenIconsBox = () => {
    setOpenBox(!openBox);
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

            <div className={styles.buttons}>
              <div className={styles.icons} onClick={handleOpenIconsBox}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="rgb(241, 109, 1)"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g />
                    <path d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M8.5,8 C9.33,8,10,8.67,10,9.5S9.33,11,8.5,11S7,10.33,7,9.5S7.67,8,8.5,8z M12,18c-2.28,0-4.22-1.66-5-4h10C16.22,16.34,14.28,18,12,18z M15.5,11c-0.83,0-1.5-0.67-1.5-1.5S14.67,8,15.5,8S17,8.67,17,9.5S16.33,11,15.5,11z" />
                  </g>
                </svg>
              </div>
              <Button name="wyślij" type="submit" />
            </div>
          </form>
        </div>
        <div
          className={styles.iconsBox}
          style={{
            display: `${!openBox ? "none" : "flex"}`,
          }}
        >
          <IconsBox
            setSelectedIcon={setSelectedIcon}
            setOpenBox={setOpenBox}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default WallPage;
