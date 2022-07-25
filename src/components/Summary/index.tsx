import entradaImg from "../../assets/entradas.svg";
import saidaImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="entrada" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidaImg} alt="saida" />
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}