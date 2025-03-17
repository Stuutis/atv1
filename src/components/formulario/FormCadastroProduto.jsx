import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function FormCadastroProduto(props) {
  const [isValid, setIsValid] = useState(false);
  const [produto, setProduto] = useState({
    produto: "",
    codigoProduto: "",
    descricaoProduto: "",
    categoriaProduto: "",
    marcaProduto: "",
    modeloProduto: "",
    estoqueProduto: "",
    precoCusto: "",
    precoVenda: "",
  });

  useEffect(() => {
    if (props.productToEdit) {
      setProduto(props.productToEdit);
    } else {
      setProduto({
        produto: "",
        codigoProduto: "",
        descricaoProduto: "",
        categoriaProduto: "",
        marcaProduto: "",
        modeloProduto: "",
        estoqueProduto: "",
        precoCusto: "",
        precoVenda: "",
      });
    }
  }, [props.productToEdit]);

  function handleChange(e) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setIsValid(true);
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    if (props.productToEdit) {
      const updatedList = props.productList.map((prod) =>
        prod.codigoProduto === produto.codigoProduto ? produto : prod
      );
      props.setProductList(updatedList);
    } else {
      props.setProductList([...props.productList, produto]);
    }
    props.setShowTable(false);
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
        {/* ... (campos do formulário) */}
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Produto</Form.Label>
            <Form.Control
              required
              id="produto"
              name="produto"
              type="text"
              placeholder="Digite o Produto"
              value={produto.produto}
              onChange={handleChange}
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
              value={produto.codigoProduto}
              onChange={handleChange}
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
              value={produto.descricaoProduto}
              onChange={handleChange}
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
              name="categoriaProduto"
              value={produto.categoriaProduto}
              onChange={handleChange}
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
              value={produto.marcaProduto}
              onChange={handleChange}
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
              value={produto.modeloProduto}
              onChange={handleChange}
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
              value={produto.estoqueProduto}
              onChange={handleChange}
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
              value={produto.precoCusto}
              onChange={handleChange}
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
              value={produto.precoVenda}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, informe o preço de venda do produto.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex gap-2">
          <Button variant="success" type="submit">
            {props.productToEdit ? "Atualizar Produto" : "Cadastrar Produto"}
          </Button>
          <Button
            variant="warning"
            onClick={() => {
              props.setShowTable(false);
            }}
          >
            Mostrar produtos
          </Button>
        </div>
      </Form>
    </>
  );
}
