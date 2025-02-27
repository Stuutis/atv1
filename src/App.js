import RegisterProductPage from './pages/RegisterProductPage';
import LoginScreen from './pages/LoginScreen'
import MenuScreen from './pages/MenuScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Screen404 from './pages/Screen404';
import RegisterSupplier from './pages/RegisterSupplier';

export const ContextoLogin = createContext()

function App() {
    const [dadosLogin, setDadosLogin] = useState({ usuario: "", logado: false });

    if (dadosLogin.logado) {

        return (
            <div className='App'>
                <ContextoLogin.Provider value={{ dadosLogin, setDadosLogin }}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<MenuScreen />}></Route>
                            <Route path='/produto' element={<RegisterProductPage />}></Route>
                            <Route path='/fornecedor' element={<RegisterSupplier />}></Route>
                            <Route path='*' element={<Screen404 />}></Route>
                        </Routes>
                    </BrowserRouter>
                </ContextoLogin.Provider>
            </div>
        );
    } else {
        return (
            <div className='App'>
                <ContextoLogin.Provider value={{ dadosLogin, setDadosLogin }}>
                    <LoginScreen />
                </ContextoLogin.Provider>
            </div>
        )
    }
}

export default App;