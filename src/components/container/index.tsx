import React from "react";

type Props = {
    children: React.ReactNode;
    padding?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    gap?: string;
};

export const Container: React.FC<Props> = ({
    children,
    padding = "21px",
    display = "block",
    alignItems,
    justifyContent,
    gap,
}) => {
    return (
        <div
            style={{
                padding,
                display,
                alignItems,
                justifyContent,
                gap,
            }}
        >
            {children}
        </div>
    );
};
