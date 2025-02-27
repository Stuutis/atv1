import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";

export default function Page(props) {
  return (
    <Container>
      <Cabecalho titulo={props.titulo} />
      <Menu />
      <Container className="p-4 border">
        {}
        {props.children}
      </Container>
    </Container>
  );
}
