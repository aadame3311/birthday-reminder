import '../styles/Item.css';

const Item = (props) => {
    const {
        id,
        name, 
        birthday,
        age, 
        picture,
        handleRemove
    } = props;

    return (
        <div className="list-item">
            <div className="thumbnail">
                <div className="img">

                </div>
            </div>
            <div className="information">
                <div className="name">{ name }</div>
                <div className="birthday">{ birthday }</div>
                <div className="age">{ age }</div>
            </div>
            <div onClick={() => handleRemove(id)} className="actions">
                Remove
            </div>
        </div>
    )
}

export default Item;