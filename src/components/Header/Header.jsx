import styles from "./Header.module.scss";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/images/icon-sun.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isDark, setDark] = useState(false);
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <ThemeIcon onClick={() => setDark(!isDark)} />
    </div>
  );
};
