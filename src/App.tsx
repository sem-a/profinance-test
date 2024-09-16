import React, { useState } from "react";
import { Container } from "./components/container";
import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { BilletProfile } from "./components/billet-profile";
import { H2 } from "./components/title";
import { Source } from "@mui/icons-material";
import { Billet, BilletSelect } from "./components/billet";

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
                <div style={{ width: "30%" }}>
                    <Menu />
                    <Footer />
                    <Button
                        margin="5px 0 0 0"
                        paddingBlock="35px"
                        borderRadius="25px"
                    >
                        Связаться с нами
                    </Button>
                </div>
                <div style={{ width: "70%" }}>
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
                    <Container
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap="7px"
                        padding="0"
                    >
                        <Billet
                            id="barcode"
                            width="178px"
                            label="Баркод"
                            placeholder="3245673819504819"
                        />
                        <Billet
                            id="articul"
                            width="173px"
                            label="Артикул"
                            placeholder="ДжЖсинМом0823"
                        />
                        <Billet
                            id="size"
                            width="62px"
                            label="Размер"
                            placeholder="44"
                        />
                        <BilletSelect
                            id="category"
                            width="121px"
                            label="Категория"
                            options={options}
                        />
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default App;
