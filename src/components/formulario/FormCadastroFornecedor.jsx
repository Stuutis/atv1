import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function FormCadastroFornecedor(props) {
  const [isValid, setIsValid] = useState(false);
  const [supplier, setSupplier] = useState({
    nomeFornecedor: "",
    cnpjFornecedor: "",
    emailFornecedor: "",
    telefoneFornecedor: "",
    enderecoFornecedor: "",
    bairroFornecedor: "",
    cidadeFornecedor: "",
    estadoFornecedor: "",
    cepFornecedor: "",
    observacoesFornecedor: "",
  });

  function handleChange(e) {
    setSupplier({
      ...supplier,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setIsValid(true);
    }
    e.preventDefault();
    e.stopPropagation();
    console.log(supplier);

    if (props.supplierToEdit) {
      const updatedList = props.supplierList.map((fornecedor) =>
        fornecedor.cnpjFornecedor === supplier.cnpjFornecedor
          ? supplier
          : fornecedor
      );
      props.setSupplierList(updatedList);
    } else {
      props.setSupplierList([...props.supplierList, supplier]);
    }

    props.setIsShowTable(false);
  }

  useEffect(() => {
    if (props.supplierToEdit) {
      setSupplier(props.supplierToEdit);
    } else {
      setSupplier({
        nomeFornecedor: "",
        cnpjFornecedor: "",
        emailFornecedor: "",
        telefoneFornecedor: "",
        enderecoFornecedor: "",
        bairroFornecedor: "",
        cidadeFornecedor: "",
        estadoFornecedor: "",
        cepFornecedor: "",
        observacoesFornecedor: "",
      });
    }
  }, [props.supplierToEdit]);

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
              name="nomeFornecedor"
              value={supplier.nomeFornecedor}
              onChange={handleChange}
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
              name="cnpjFornecedor"
              value={supplier.cnpjFornecedor}
              onChange={handleChange}
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
              name="emailFornecedor"
              value={supplier.emailFornecedor}
              onChange={handleChange}
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
              name="telefoneFornecedor"
              value={supplier.telefoneFornecedor}
              onChange={handleChange}
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
              name="enderecoFornecedor"
              value={supplier.enderecoFornecedor}
              onChange={handleChange}
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
              name="bairroFornecedor"
              value={supplier.bairroFornecedor}
              onChange={handleChange}
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
              name="cidadeFornecedor"
              value={supplier.cidadeFornecedor}
              onChange={handleChange}
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
              name="estadoFornecedor"
              value={supplier.estadoFornecedor}
              onChange={handleChange}
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
              name="cepFornecedor"
              value={supplier.cepFornecedor}
              onChange={handleChange}
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
              name="observacoesFornecedor"
              value={supplier.observacoesFornecedor}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <div className="d-flex gap-2">
          <Button variant="success" type="submit">
            {props.supplierToEdit
              ? "Atualizar Fornecedor"
              : "Cadastrar Fornecedor"}
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              props.setIsShowTable(false);
            }}
          >
            Mostrar fornecedores
          </Button>
        </div>
      </Form>
    </>
  );
}
