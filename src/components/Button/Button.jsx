import './Button.css';

function Button({ children, onClick, type = 'button'}){
    return(
        <button type={type} className='custom-buttom' onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;