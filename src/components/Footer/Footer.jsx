import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <>
        <div className={styles.Footer}>
        <footer className={styles.Footer__name}>Design idea taken from Ms. Brittany Chiang's website and Built by Cara Jane Tran</footer>
        <footer className={styles.Footer__copyright}>&#169; August 2021</footer>
        </div>
        </>
    );
};