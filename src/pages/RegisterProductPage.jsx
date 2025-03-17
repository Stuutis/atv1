import { useState } from "react";
import FormCadastroProduto from "../components/formulario/FormCadastroProduto";
import Page from "../components/Page";
import TableProduct from "./tables/TableProduct";
import { produtos } from "../dados/produtos";

export default function RegisterProductPage() {
  const [showTable, setShowTable] = useState(false);
  const [productList, setProductList] = useState(produtos);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleEdit = (produto) => {
    setProductToEdit(produto);
    setShowTable(true);
  };

  const handleShowTable = () => {
    setProductToEdit(null);
    setShowTable(true);
  };

  return (
    <div>
      <Page titulo="Sistema de Cadastro de Produtos" />
      {showTable ? (
        <FormCadastroProduto
          showTable={showTable}
          setShowTable={setShowTable}
          productList={productList}
          setProductList={setProductList}
          productToEdit={productToEdit}
        />
      ) : (
        <TableProduct
          showTable={showTable}
          setShowTable={handleShowTable}
          productList={productList}
          setProductList={setProductList}
          productToEdit={productToEdit}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}
