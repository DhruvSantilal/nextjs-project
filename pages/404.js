import Link from "next/link";
import styles from "../styles/404.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1> Page Not Found</h1>
      <h3>Check to see if you are in the correct page.</h3>
      <Link href="/">Click here to go home</Link>
    </div>
  );
};

export default PageNotFound;
