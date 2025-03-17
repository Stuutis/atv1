import { Alert, Button, Container, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState } from "react";

export default function TableSupplier(props) {
  const [showModal, setShowModal] = useState(false);
  const [supplierToDelete, setSupplierToDelete] = useState(null);

  const handleDelete = (cnpj) => {
    setSupplierToDelete(cnpj);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedList = props.supplierList.filter(
      (fornecedor) => fornecedor.cnpjFornecedor !== supplierToDelete
    );
    props.setSupplierList(updatedList);
    setShowModal(false);
    setSupplierToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSupplierToDelete(null);
  };

  return (
    <Container>
      <Alert>
        <h2>Tabela de Fornecedores</h2>
      </Alert>
      <Button
        onClick={() => {
          props.setIsShowTable(true);
        }}
        className="mb-3"
        variant="success"
      >
        Novo Forncedor
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome do fornecedor</th>
            <th>CNPJ</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>CEP</th>
            <th>Observações</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props?.supplierList?.map((fornecedor) => (
            <tr key={fornecedor.cnpjFornecedor}>
              <td>{fornecedor.nomeFornecedor}</td>
              <td>{fornecedor.cnpjFornecedor}</td>
              <td>{fornecedor.emailFornecedor}</td>
              <td>{fornecedor.telefoneFornecedor}</td>
              <td>{fornecedor.enderecoFornecedor}</td>
              <td>{fornecedor.bairroFornecedor}</td>
              <td>{fornecedor.cidadeFornecedor}</td>
              <td>{fornecedor.estadoFornecedor}</td>
              <td>{fornecedor.cepFornecedor}</td>
              <td>{fornecedor.observacoesFornecedor}</td>
              <td>
                <Button
                  className="mb-2"
                  variant="warning"
                  onClick={() => props.handleEdit(fornecedor)}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(fornecedor.cnpjFornecedor)}
                >
                  Excluir
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir este fornecedor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
