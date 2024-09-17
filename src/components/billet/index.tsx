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
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
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
    onChange,
}) => {
    return (
        <div className={styles.flex}>
            <label htmlFor={id}>{label}</label>
            <input
                style={{ width }}
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
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
    return (
        <div className={styles.flex}>
            <label htmlFor={id}>{label}</label>
            <>
                <select name={id} id={id}>
                    {options.map((option: Option) => {
                        return (
                            <option value={option.value}>
                                {option.placeholder}
                            </option>
                        );
                    })}
                </select>
            </>
        </div>
    );
};
