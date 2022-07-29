import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onRequestOpen: () => void;
}

export function Header({ onRequestOpen }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        <button type="button" onClick={onRequestOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
