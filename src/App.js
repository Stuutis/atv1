import Cabecalho from './components/Cabecalho';
import RegisterProductPage from './pages/RegisterProductPage';
function App() {
    return (
        <div className="App">
            <Cabecalho titulo='Sistema de Cadastro de Produtos' />
            <RegisterProductPage />
        </div>
    );
}

export default App;