import React from "react";
import styles from "./index.module.css";
import { Button } from "../button";

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.logo}>
                        <h2>
                            <span>ФИН</span> Контроль
                        </h2>
                    </div>
                    <Button
                        paddingBlock="10px"
                        paddingInline="10px"
                        fontSize="12px"
                        fontWeight="400"
                        width="auto"
                        background="#283147"
                        backgroundHover="#1e2535"
                    >
                        Меню
                    </Button>
                </div>
            </div>
            <nav className={styles.nav}>
                <Button
                    background="#283047"
                    backgroundHover="#1e2535"
                    paddingBlock="28px"
                >
                    Настройки
                </Button>
                <Button>Внесение данных</Button>
                <Button>Отчеты</Button>
                <Button>База знаний</Button>
            </nav>
        </div>
    );
};
