import React from "react";
import styles from "./index.module.css";
import { Button } from "../button";
import {
    ArrowDropDown,
    AssignmentOutlined,
    LibraryBooksOutlined,
    NoteAltOutlined,
    Settings,
} from "@mui/icons-material";

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
                    paddingBlock="21px"
                    paddingInline="13px"
                    fontWeight="500"
                    borderRadius="13px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <div className={styles.buttonFlexItem}>
                        <Settings />
                        <span>Настройки</span>
                    </div>
                    <div className={styles.buttonFlexItem}>
                        <ArrowDropDown />
                    </div>
                </Button>
                <Button
                    background="#283047"
                    backgroundHover="#1e2535"
                    paddingBlock="21px"
                    paddingInline="13px"
                    fontWeight="500"
                    borderRadius="13px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <div className={styles.buttonFlexItem}>
                        <NoteAltOutlined />
                        <span>Внесение данных</span>
                    </div>
                    <div className={styles.buttonFlexItem}>
                        <ArrowDropDown />
                    </div>
                </Button>
                <Button
                    background="#283047"
                    backgroundHover="#1e2535"
                    paddingBlock="21px"
                    paddingInline="13px"
                    fontWeight="500"
                    borderRadius="13px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <div className={styles.buttonFlexItem}>
                        <AssignmentOutlined />
                        <span>Отчеты</span>
                    </div>
                    <div className={styles.buttonFlexItem}>
                        <ArrowDropDown />
                    </div>
                </Button>
                <Button
                    background="#283047"
                    backgroundHover="#1e2535"
                    paddingBlock="21px"
                    paddingInline="13px"
                    fontWeight="500"
                    borderRadius="13px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <div className={styles.buttonFlexItem}>
                        <LibraryBooksOutlined />
                        <span>База знаний</span>
                    </div>
                    <div className={styles.buttonFlexItem}>
                        <ArrowDropDown />
                    </div>
                </Button>
            </nav>
        </div>
    );
};
