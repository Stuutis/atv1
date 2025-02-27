import FormCadastroProduto from "../components/formulario/FormCadastroProduto";
import Page from "../components/Page";

export default function RegisterProductPage() {
  return (
    <div>
      <Page titulo="Sistema de Cadastro de produtos" />
      <FormCadastroProduto />
    </div>
  );
}
