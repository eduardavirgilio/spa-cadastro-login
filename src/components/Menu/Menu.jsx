import Button from '../Button/Button';
import './Menu.css';

function Menu({onMenuClick}){
    return(
        <nav className="app-menu">
            <Button onClick={() => onMenuClick('login')}>Login</Button>
            <Button onClick={() => onMenuClick('cadastro')}>Cadastro</Button>
            {/* <Button onClick={() => alert("Clicou!")}>Teste</Button> */}
        </nav>
    )
}

export default Menu;