import './Menu.css';
import Button from '../Button/Button';

function Menu({onMenuClick}){
    return(
        <nav className='app-menu'>
            <Button onClick={() => onMenuClick('login')}>Login</Button>
            <Button onClick={() => onMenuClick('cadastro')}>Cadastro</Button>
        </nav>
    )
}

export default Menu;