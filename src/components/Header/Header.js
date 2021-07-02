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
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.logo}>{logoViev}</div>
        <div className={styles.appName}>{nameViev}</div>
        <div className={styles.buttons}>{buttonLogOutViev}</div>
      </div>
    </div>
  );
};

export default Header;
