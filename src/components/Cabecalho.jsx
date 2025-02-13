import { Alert } from "react-bootstrap";

export default function Cabecalho(props) {
  return (
    <div>
      <Alert variant="dark" className="text-center">
        <h2>{props.titulo || "Informe um texto para o cabeçalho"}</h2>
      </Alert>
    </div>
  );
}
