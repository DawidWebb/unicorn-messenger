import { icons } from "../../helpers/emojis";
import styles from "./iconsBox.module.scss";

const IconBox = ({ setSelectedIcon, setOpenBox, message, setMessage }) => {
  const handleSeIcon = (e) => {
    setSelectedIcon(e.target.id);
    setOpenBox(false);
    setMessage((prev) => [prev + e.target.id]);
  };

  const vievIcons = icons.map((item) => (
    <div id={item.id} key={item.id} onClick={handleSeIcon}>
      {item.path}
    </div>
  ));

  return <div className={styles.wrapper}>{vievIcons}</div>;
};

export default IconBox;
