import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function FormCadastroProduto() {
  const [isValid, setIsValid] = useState(false);
  const [produto, setProduto] = useState("");
  const [codigoProduto, setCodigoProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");
  const [marcaProduto, setMarcaProduto] = useState("");
  const [modeloProduto, setModeloProduto] = useState("");
  const [estoqueProduto, setEstoqueProduto] = useState("");
  const [precoCusto, setPrecoCusto] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setIsValid(true);
    }
    e.preventDefault();
    e.stopPropagation();
    console.log(
      produto,
      codigoProduto,
      descricaoProduto,
      categoriaProduto,
      marcaProduto,
      modeloProduto,
      estoqueProduto,
      precoCusto,
      precoVenda
    );
  }

  return (
    <>
      <div className="border text-center">
        <h3>Formulário de Cadastro de Produto</h3>
      </div>
      <Form
        noValidate
        validated={isValid}
        onSubmit={handleSubmit}
        className="bg-light m-4 p-5 rounded "
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Produto</Form.Label>
            <Form.Control
              required
              id="produto"
              name="produto"
              type="text"
              placeholder="Digite o Produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o nome do produto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Código do Produto</Form.Label>
            <Form.Control
              required
              id="codigoProduto"
              name="codigoProduto"
              type="text"
              placeholder="Código do Produto"
              value={codigoProduto}
              onChange={(e) => setCodigoProduto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite o código do produto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Descrição do Produto</Form.Label>
            <Form.Control
              required
              id="descricaoProduto"
              name="descricaoProduto"
              type="text"
              placeholder="Descrição do Produto"
              value={descricaoProduto}
              onChange={(e) => setDescricaoProduto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, digite a descrição do produto.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Categoria do Produto</Form.Label>
            <Form.Select
              required
              aria-label="Default select example"
              value={categoriaProduto}
              onChange={(e) => setCategoriaProduto(e.target.value)}
            >
              <option disabled value="">
                Selecione a categoria
              </option>
              <option value="eletronicos">Eletrônicos</option>
              <option value="esporteLazer">Esporte e Lazer</option>
              <option value="moda">Moda</option>
              <option value="saudeBeleza">Saude e Beleza</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, selecione a categoria do produto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Marca do Produto</Form.Label>
            <Form.Control
              required
              id="marcaProduto"
              name="marcaProduto"
              type="text"
              placeholder="Digite a marca do produto"
              value={marcaProduto}
              onChange={(e) => setMarcaProduto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a marca do produto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Modelo do Produto</Form.Label>
            <Form.Control
              required
              id="modeloProduto"
              name="modeloProduto"
              type="text"
              placeholder="Digite o modelo do produto"
              value={modeloProduto}
              onChange={(e) => setModeloProduto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o modelo do produto.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Estoque</Form.Label>
            <Form.Control
              required
              id="estoqueProduto"
              name="estoqueProduto"
              type="text"
              placeholder="Digite a quantidade em estoque"
              value={estoqueProduto}
              onChange={(e) => setEstoqueProduto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe a quantidade em estoque do produto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Preço de custo</Form.Label>
            <Form.Control
              required
              id="precoCusto"
              name="precoCusto"
              type="text"
              placeholder="Preço de custo do produto"
              value={precoCusto}
              onChange={(e) => setPrecoCusto(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de custo do produto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Preço de venda</Form.Label>
            <Form.Control
              required
              id="precoVenda"
              name="precoVenda"
              type="text"
              placeholder="Preço de venda do produto"
              value={precoVenda}
              onChange={(e) => setPrecoVenda(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de venda do produto.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex gap-2">
          <Button variant="success" type="submit">
            Cadastrar
          </Button>
          <Button variant="warning" type="reset">
            Limpar
          </Button>
        </div>
      </Form>
    </>
  );
}
