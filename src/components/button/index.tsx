import React, { useState } from "react";

type Props = {
    children: React.ReactNode;
    width?: string | number | undefined;
    background?: string | number | undefined;
    backgroundHover?: string | number | undefined;
    paddingBlock?: string | number | undefined;
    paddingInline?: string | number | undefined;
    borderRadius?: string | number | undefined;
    color?: string | undefined;
    fontWeight?: string | undefined;
    fontSize?: string | number | undefined;
    border?: string | undefined;
    margin?: string | number | undefined;
    transition?: string | undefined;
};

export const Button: React.FC<Props> = ({
    children,
    width = "100%",
    background = "#287eff",
    backgroundHover = "#2064ca",
    paddingBlock = "13px",
    paddingInline = "0px",
    borderRadius = "10px",
    border = "0px",
    color = "white",
    fontWeight = "700",
    fontSize = "16px",
    margin = "",
    transition = "0.5s",
}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            style={{
                width,
                background: hovered ? backgroundHover : background,
                paddingBlock,
                paddingInline,
                borderRadius,
                color,
                fontWeight,
                fontSize,
                border,
                margin,
                transition,
            }}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
        >
            {children}
        </button>
    );
};
