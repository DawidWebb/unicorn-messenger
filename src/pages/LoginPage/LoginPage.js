import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLogin } from "../../data/actions";
import { Button } from "components";
import styles from "./loginPage.module.scss";

const LoginPage = () => {
  //global state
  const loginFormState = useSelector((store) => store.login);
  const dispatch = useDispatch();

  //local state and actions for login and password
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const loginObject = {
      login,
      password,
    };
    dispatch(addLogin(loginObject));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="login"
            placeholder="wpisz swój login"
            onChange={handleSetLogin}
          />
          <input
            type="password"
            name="password"
            placeholder="wpisz swoje hasło"
            onChange={handleSetPassword}
          />
          <div>
            <Button type="submit" name="zaloguj mnie" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
