import React, { useState } from "react";
import { Container } from "./components/container";
import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { BilletProfile } from "./components/billet-profile";
import { H2 } from "./components/title";
import {
    Clear,
    CreateNewFolder,
    DriveFileMove,
    IosShare,
    Source,
} from "@mui/icons-material";
import { Billet, BilletSelect } from "./components/billet";
import { Table } from "./components/table";

type Option = {
    value: string;
    placeholder: string;
};

function App() {
    const [options, useOptions] = useState<Option[]>([
        { value: "jeans", placeholder: "Джинсы" },
        { value: "t-shirts", placeholder: "Футболки" },
        { value: "shorts", placeholder: "Шорты" },
    ]);

    return (
        <div className="App">
            <Container
                display="flex"
                alignItems="flex-start"
                justifyContent="flex-start"
                gap="50px"
            >
                <div style={{ width: "30%", position: "fixed" }}>
                    <Menu />
                    <Footer />
                    <Button
                        margin="5px 0 0 0"
                        paddingBlock="28px"
                        borderRadius="25px"
                    >
                        Связаться с нами
                    </Button>
                </div>
                <div style={{ width: "70%", marginLeft: "calc(30% + 50px)" }}>
                    <BilletProfile />
                    <Container
                        padding="60px 0px 38px 2px"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap="21px"
                    >
                        <H2>Остатки сформированы на 01.04.2023 г.</H2>
                        <Button
                            paddingBlock="14px"
                            paddingInline="14px"
                            width="auto"
                            fontWeight="400"
                            fontSize="14px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap="7px"
                            borderRadius="30px"
                            background="#283047"
                            backgroundHover="#161D32"
                        >
                            <Source />
                            <span style={{ marginTop: "2px" }}>Инструкции</span>
                        </Button>
                    </Container>
                    <Container padding="0">
                        <Table />
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default App;
