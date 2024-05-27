import { Link } from 'react-router-dom';
import '../css/cart.css';
import CartComponent from '../components/CartComponent';
import CartReviewComponent from '../components/CartReviewComponent';

function Cart(){

    const cartArr = [{name: "name1", price: "100", size:"50", pictures:"/img/bruki.png", color:"dfbdshfs"},
    {name: "name2", price: "200", size:"52", pictures:"/img/bruki.png", color:"dfbdshfs"},
    {name: "name16", price: "300", size:"48", pictures:"/img/bruki.png", color:"dfbdshfs"},]

    return(
        <>
            <div className="inputLine">
                <h className='headForLine'>О тканях</h>
            </div>
            <div className='cartHeadContainer'>
                <div className="cartContainer">
                    <div className='cartComponents'>
                        {cartArr.map((obj)=>(
                                <CartComponent 
                                name={obj.name}
                                price={obj.price}
                                size={obj.size}
                                picture={obj.pictures}
                                color={obj.color}
                                />
                            ))}
                    </div>
                    <div className='cartReview'>
                        <h>Сумма заказа</h>
                        {cartArr.map((obj)=>(
                                <CartReviewComponent 
                                name={obj.name}
                                price={obj.price}
                                />
                        ))}
                        <div className='Line'></div>
                        <div className='HeaderInfo'>
                            <p>Итого</p>
                            <p>TotalPrice{}</p>
                        </div>
                        <button id='Order'>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;