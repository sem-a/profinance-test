import React from "react";
import styles from "./index.module.css";
import { Button } from "../button";
import {
    AccountCircle,
    CalendarMonth,
} from "@mui/icons-material";

export const BilletProfile = () => {
    const buttonStylesProfile = {
        fontWeight: "400",
        paddingInline: "21px",
        paddingBlock: "27px",
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "7px",
        fontSize: "16px",
        borderRadius: "18px",
    };
    const buttonStyles = {
        width: "auto",
        fontSize: "14px",
        fontWeight: "400",
        borderRadius: "28px",
        paddingInline: "21px",
        paddingBlock: "14px",
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.flex}>
                    <div className={styles.item}>
                        <Button
                            fontWeight={buttonStylesProfile.fontWeight}
                            color="black"
                            paddingInline={buttonStylesProfile.paddingInline}
                            paddingBlock={buttonStylesProfile.paddingBlock}
                            width={buttonStylesProfile.width}
                            display={buttonStylesProfile.display}
                            alignItems={buttonStylesProfile.alignItems}
                            justifyContent={buttonStylesProfile.justifyContent}
                            gap={buttonStylesProfile.gap}
                            fontSize={buttonStylesProfile.fontSize}
                            borderRadius={buttonStylesProfile.borderRadius}
                            background="none"
                            backgroundHover="#F7F8F8"
                        >
                            <AccountCircle />
                            <span className={styles.buttonMargin}>Иванов И.И</span>
                        </Button>
                        <Button
                            fontWeight={buttonStylesProfile.fontWeight}
                            color="#287EFF"
                            paddingInline={buttonStylesProfile.paddingInline}
                            paddingBlock={buttonStylesProfile.paddingBlock}
                            width={buttonStylesProfile.width}
                            display={buttonStylesProfile.display}
                            alignItems={buttonStylesProfile.alignItems}
                            justifyContent={buttonStylesProfile.justifyContent}
                            gap={buttonStylesProfile.gap}
                            fontSize={buttonStylesProfile.fontSize}
                            borderRadius={buttonStylesProfile.borderRadius}
                            background="#EEF5FF"
                            backgroundHover="#DBE9FB"
                        >
                            <CalendarMonth />
                            <span className={styles.buttonMargin}>Тариф до 15.04.2024</span>
                        </Button>
                    </div>
                    <div className={styles.item}>
                        <Button
                            fontSize={buttonStyles.fontSize}
                            fontWeight={buttonStyles.fontWeight}
                            width={buttonStyles.width}
                            borderRadius={buttonStyles.borderRadius}
                            paddingInline={buttonStyles.paddingInline}
                            paddingBlock={buttonStyles.paddingBlock}
                            color="black"
                            background="white"
                            backgroundHover="#F7F8F8"
                            border="1px solid black"
                        >
                            Выйти
                        </Button>
                        <Button
                            fontSize={buttonStyles.fontSize}
                            fontWeight={buttonStyles.fontWeight}
                            width={buttonStyles.width}
                            borderRadius={buttonStyles.borderRadius}
                            paddingInline={buttonStyles.paddingInline}
                            paddingBlock={buttonStyles.paddingBlock}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="7px"
                            background="#FF6B17"
                            backgroundHover="#ED6315"
                            color="white"
                            border="2px solid #FF6B17"
                        >
                            <span>О нас</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
