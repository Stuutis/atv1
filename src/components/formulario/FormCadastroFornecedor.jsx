import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function FormCadastroFornecedor() {
  const [isValid, setIsValid] = useState(false);
  const [nomeFornecedor, setNomeFornecedor] = useState("");
  const [cnpjFornecedor, setCnpjFornecedor] = useState("");
  const [emailFornecedor, setEmailFornecedor] = useState("");
  const [telefoneFornecedor, setTelefoneFornecedor] = useState("");
  const [enderecoFornecedor, setEnderecoFornecedor] = useState("");
  const [bairroFornecedor, setBairroFornecedor] = useState("");
  const [cidadeFornecedor, setCidadeFornecedor] = useState("");
  const [estadoFornecedor, setEstadoFornecedor] = useState("");
  const [cepFornecedor, setCepFornecedor] = useState("");
  const [observacoesFornecedor, setObservacoesFornecedor] = useState("");

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setIsValid(true);
    }
    e.preventDefault();
    e.stopPropagation();
    console.log(
      nomeFornecedor,
      cnpjFornecedor,
      emailFornecedor,
      telefoneFornecedor,
      enderecoFornecedor,
      bairroFornecedor,
      cidadeFornecedor,
      estadoFornecedor,
      cepFornecedor,
      observacoesFornecedor
    );
  }

  return (
    <>
      <div className="border text-center">
        <h3>Formulário de Cadastro de Fornecedor</h3>
      </div>
      <Form
        noValidate
        validated={isValid}
        onSubmit={handleSubmit}
        className="bg-light m-4 p-5 rounded "
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nome do Fornecedor</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o nome do fornecedor"
              value={nomeFornecedor}
              onChange={(e) => setNomeFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o nome do fornecedor.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o CNPJ"
              value={cnpjFornecedor}
              onChange={(e) => setCnpjFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o CNPJ do fornecedor.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o Email"
              value={emailFornecedor}
              onChange={(e) => setEmailFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite um email válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o Telefone"
              value={telefoneFornecedor}
              onChange={(e) => setTelefoneFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite um telefone válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o Endereço"
              value={enderecoFornecedor}
              onChange={(e) => setEnderecoFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o endereço.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o Bairro"
              value={bairroFornecedor}
              onChange={(e) => setBairroFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o bairro.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a Cidade"
              value={cidadeFornecedor}
              onChange={(e) => setCidadeFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite a cidade.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o Estado"
              value={estadoFornecedor}
              onChange={(e) => setEstadoFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o estado.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o CEP"
              value={cepFornecedor}
              onChange={(e) => setCepFornecedor(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o CEP.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Observações</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Digite alguma observação sobre o fornecedor (opcional)"
              value={observacoesFornecedor}
              onChange={(e) => setObservacoesFornecedor(e.target.value)}
            />
          </Form.Group>
        </Row>

        <div className="d-flex gap-2">
          <Button variant="success" type="submit">
            Cadastrar Fornecedor
          </Button>
          <Button variant="warning" type="reset">
            Limpar
          </Button>
        </div>
      </Form>
    </>
  );
}
