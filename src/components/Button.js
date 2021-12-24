import '../styles/Button.css';

const Button = (props) => {
    const {
        children,
        clickHandler = () => {}
    } = props;

    return (

        <button onClick={(e) => clickHandler(e)} className="btn">
            { children }
        </button>
    )
}

export default Button;