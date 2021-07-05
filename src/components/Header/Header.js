import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLogout, cookieDel, clearBase } from "../../data/actions";
import { Button } from "components";

import styles from "./header.module.scss";

const Header = () => {
  const login = useSelector((store) => store.login);
  const cookie = useSelector((store) => store.cookie);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(addLogout());
    dispatch(cookieDel());
    dispatch(clearBase());
  };

  const [windowScroll, setWindowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setWindowScroll(true);
      } else {
        setWindowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setWindowScroll]);

  const logoViev =
    !login.length && !cookie.length ? (
      <img src="images/unicorn-sleep_640.png" alt="unicorn-sleep" />
    ) : (
      <img src="images/unicorn-stand_640.png" alt="unicorn-stand" />
    );

  const buttonLogOutViev =
    !login.length && !cookie.length ? (
      ""
    ) : (
      <Button type="button" name="wyloguj mnie" onClick={handleLogOut} />
    );

  const nameViev = !cookie.length ? (
    <p>Unicorn - messenger</p>
  ) : (
    <p>Hej {cookie}...</p>
  );
  return (
    <div
      className={styles.wrapper}
      style={{
        top: `${windowScroll ? "-200px" : "0px"}`,
      }}
    >
      <div className={styles.inside}>
        <div className={styles.logo}>{logoViev}</div>
        <div className={styles.appName}>{nameViev}</div>
        <div className={styles.buttons}>{buttonLogOutViev}</div>
      </div>
    </div>
  );
};

export default Header;
