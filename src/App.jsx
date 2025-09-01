import './App.css'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import FormularioLogin from './components/FormularioLogin/FormularioLogin';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {useState} from 'react'

function App() {

  const [tela, setTela] = useState('login');

  let conteudoDaTela;

  if (tela === 'login'){
    conteudoDaTela = <FormularioLogin />;
  } else {
    conteudoDaTela = <FormularioCadastro />
  }
  return (
    <main>
      <Header />
      <Menu onMenuClick={setTela}/>
      {conteudoDaTela}
    </main>
  )
}

export default App
