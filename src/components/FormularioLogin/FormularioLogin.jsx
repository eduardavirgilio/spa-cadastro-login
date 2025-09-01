import './FormularioLogin.css';
import Button from '../Button/Button';

function FormularioLogin(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Dados de login enviados!')
    }
    
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Acessar conta</h2>

            <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" placeholder="seuemail@exemplo.com" required/>
            </div>

            <div className="form-group">
                <label htmlFor="login-senha">Senha</label>
                <input id="login-senha" type="password" placeholder="Sua senha" required/>
            </div>

            <div className="form-actions">
                <Button type="submit">Entrar</Button>
                <Button type="reset">Limpar</Button>
            </div>
        </form>
    )
}

export default FormularioLogin;