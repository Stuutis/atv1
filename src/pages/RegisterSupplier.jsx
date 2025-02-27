import FormCadastroFornecedor from "../components/formulario/FormCadastroFornecedor";
import Page from "../components/Page";

export default function RegisterSupplier(props) {
  return (
    <div>
      <Page Page titulo="Sistema de Cadastro de fornecedores" />
      <FormCadastroFornecedor />
    </div>
  );
}
