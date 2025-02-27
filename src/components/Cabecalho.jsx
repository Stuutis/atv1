import { Alert } from "react-bootstrap";
import { ContextoLogin } from "../App";
import { useContext } from "react";
export default function Cabecalho(props) {
  const contextoLogin = useContext(ContextoLogin);
  return (
    <div>
      <Alert variant="dark" className="text-center">
        <h2>{props.titulo || "Informe um texto para o cabeçalho"}</h2>
        {contextoLogin && (
          <p>
            Usuario logado: <strong>{contextoLogin.dadosLogin.usuario}</strong>
          </p>
        )}
      </Alert>
    </div>
  );
}
