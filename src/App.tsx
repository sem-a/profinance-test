import React from "react";
import { Container } from "./components/container";
import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";

function App() {
    return (
        <div className="App">
            <Container>
                <div className="container__item">
                    <Menu />
                    <Footer />
                    <Button margin="5px 0 0 0" paddingBlock="35px" borderRadius="25px">Связаться с нами</Button>
                </div>
            </Container>
        </div>
    );
}

export default App;
