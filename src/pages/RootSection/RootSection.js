import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cookeieCheck } from "../../data/actions";
import LoginPage from "../LoginPage";
import WallPage from "../WallPage";
import styles from "./rootSection.module.scss";

const RootSection = () => {
  const login = useSelector((store) => store.login);
  const cookie = useSelector((store) => store.cookie[0].isCookie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cookeieCheck());
  }, []);

  const changeViev = !login.length && !cookie ? <LoginPage /> : <WallPage />;
  return <div className={styles.wrapper}>{changeViev}</div>;
};

export default RootSection;
