import React from "react";
import styles from "./index.module.css";

export const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.item_content}>
                    <p>Техническая поддержка</p>
                </div>
                <div className={styles.contact}>
                    <div className={styles.flex}>
                        <div className={styles.item}>
                            <div className={styles.item_label}>
                                <p className={styles.dull}>Номер поддержки:</p>
                            </div>
                            <div className={styles.item_content}>
                                <p>8 (999) 999 99 99</p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.item_label}>
                                <p className={styles.dull}>Почта поддержки:</p>
                            </div>
                            <div className={styles.item_content}>
                                <p>example@pochta.ru</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_label}>
                            <p className={styles.dull}>Часы работы:</p>
                        </div>
                        <div className={styles.item_content}>
                            <p>Пн - Пт с 9:00 до 19:00 мск</p>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <a className={styles.link} href="#">
                        Пользовательское соглашение
                    </a>
                    <a className={styles.link} href="#">
                        Политика конфиденциальности
                    </a>
                    <a className={styles.link} href="#">
                        Юридическая информация
                    </a>
                    <a className={styles.link} href="#">
                        Публичная оферта
                    </a>
                </div>
            </div>
        </footer>
    );
};
