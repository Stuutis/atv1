import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { useState } from "react";

export default function TableProduct(props) {
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleDelete = (codigoProduto) => {
    setProductToDelete(codigoProduto);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedList = props.productList.filter(
      (produto) => produto.codigoProduto !== productToDelete
    );
    props.setProductList(updatedList);
    setShowModal(false);
    setProductToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  return (
    <Container>
      <Alert>
        <h2>Tabela de Produtos</h2>
      </Alert>
      <Button
        onClick={() => props.setShowTable(true)}
        className="mb-3"
        variant="success"
      >
        Novo Produto
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Código</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Estoque</th>
            <th>Preço Custo</th>
            <th>Preço Venda</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.productList.map((produto) => (
            <tr key={produto.codigoProduto}>
              <td>{produto.produto}</td>
              <td>{produto.codigoProduto}</td>
              <td>{produto.descricaoProduto}</td>
              <td>{produto.categoriaProduto}</td>
              <td>{produto.marcaProduto}</td>
              <td>{produto.modeloProduto}</td>
              <td>{produto.estoqueProduto}</td>
              <td>{produto.precoCusto}</td>
              <td>{produto.precoVenda}</td>
              <td>
                <Button
                  className="mb-2"
                  variant="warning"
                  onClick={() => props.handleEdit(produto)}
                >
                  Editar
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(produto.codigoProduto)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja excluir este produto?</Modal.Body>
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
