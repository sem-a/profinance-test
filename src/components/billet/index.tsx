import React, { useState } from "react";
import styles from "./index.module.css";
import { ArrowDropDown } from "@mui/icons-material";

type Option = {
    value: string;
    placeholder: string;
};

type Props = {
    label: React.ReactNode;
    placeholder?: string | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    id: string | undefined;
    width?: string | undefined;
};
type PropsSelect = {
    label: React.ReactNode;
    id: string | undefined;
    width?: string | undefined;
    options: Option[];
};

export const Billet: React.FC<Props> = ({
    id,
    label,
    placeholder,
    type = "text",
    width,
}) => {
    return (
        <div className={styles.flex}>
            <label htmlFor={id}>{label}</label>
            <input
                style={{ width }}
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};

export const BilletSelect: React.FC<PropsSelect> = ({
    id,
    label,
    width,
    options,
}) => {
    const [rotate, setRotate] = useState<string>("rotate(0deg)");
    const [flag, setFlag] = useState<boolean>(false);

    const toggleRotate = (flag: boolean) => {
        if (flag) {
            setRotate("rotate(180deg)");
        } else {
            setRotate("rotate(0deg)");
        }
    };

    return (
        <div className={styles.flex}>
            <label htmlFor={id}>{label}</label>
            <>
                <select
                    name={id}
                    id={id}
                    onClick={() => {
                        setFlag(!flag);
                        console.log(flag);
                        toggleRotate(flag);
                    }}
                >
                    {options.map((option: Option) => {
                        return (
                            <option value={option.value}>
                                {option.placeholder}
                            </option>
                        );
                    })}
                </select>
                <ArrowDropDown style={{ transform: rotate }} />
            </>
        </div>
    );
};
