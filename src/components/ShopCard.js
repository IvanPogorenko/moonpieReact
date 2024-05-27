import { Link, useNavigate } from 'react-router-dom';
import '../css/catalog.css';

function ShopCard(props){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/cloth/item", {state: {name: props.name}})
    }

    return(
        <div className="Card" onClick={handleClick}>
            <img src={props.picture}></img>
            <div className="Descr">
                <h className="name">{props.name}</h>
                <p className='other' >Размеры: {props.sizes}</p>
                <p className='other' >Цена: {props.price}</p>
                <p className='other' >Цвета: {props.colors}</p>
            </div>
        </div>
    );
}

export default ShopCard;