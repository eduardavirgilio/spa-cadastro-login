import '../FormularioLogin/FormularioLogin.css';
import Button from '../Button/Button';


function FormularioCadastro(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Dados de cadastro enviados!')
    }
    
    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Criar conta</h2>

            <div className="form-group">
                <label htmlFor="login-email">Nome completo</label>
                <input id="login-nome" type="text" placeholder="Seu nome" required/>
            </div>

            <div className="form-group">
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" placeholder="seuemail@exemplo.com" required/>
            </div>

            <div className="form-group">
                <label htmlFor="login-senha">Senha</label>
                <input id="login-senha" type="password" placeholder="Crie uma senha forte" required/>
            </div>

            <div className="form-actions">
                <Button type="submit">Cadastrar</Button>
                <Button type="reset">Limpar</Button>
            </div>
        </form>
    )
}

export default FormularioCadastro;