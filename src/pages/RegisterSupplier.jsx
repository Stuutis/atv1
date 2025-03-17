import { useState } from "react";
import FormCadastroFornecedor from "../components/formulario/FormCadastroFornecedor";
import Page from "../components/Page";
import TableSupplier from "./tables/TableSupplier";
import { fornecedores } from "../dados/fornecedores";

export default function RegisterSupplier(props) {
  const [showTable, setIsShowTable] = useState(false);
  const [supplierList, setSupplierList] = useState(fornecedores);
  const [supplierToEdit, setSupplierToEdit] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (fornecedor) => {
    setSupplierToEdit(fornecedor);
    setIsShowTable(true);
  };
  return (
    <div>
      <Page Page titulo="Sistema de Cadastro de fornecedores" />
      {showTable ? (
        <FormCadastroFornecedor
          showTable={showTable}
          setIsShowTable={setIsShowTable}
          supplierList={supplierList}
          setSupplierList={setSupplierList}
          supplierToEdit={supplierToEdit}
          setEditMode={setEditMode}
        />
      ) : (
        <TableSupplier
          showTable={showTable}
          setIsShowTable={setIsShowTable}
          supplierList={supplierList}
          setSupplierList={setSupplierList}
          supplierToEdit={supplierToEdit}
          handleEdit={handleEdit}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      )}
    </div>
  );
}
