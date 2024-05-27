import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard"
import '../css/catalog.css';

function Catalog() {

    const shopArr = [{name: "name1", price: "1234", sizes:"48, 50, 52", pictures:"/img/bruki.png", colors:"dfbdshfshdfbadsfsdkfhlgsd"},
    {name: "name2", price: "1234", sizes:"48, 50, 52", pictures:"/img/bruki.png", colors:"dfbdshfshdfbadsfsdkfhlgsd"},
    {name: "name3", price: "1234", sizes:"48, 50, 52", pictures:"/img/bruki.png", colors:"dfbdshfshdfbadsfsdkfhlgsd"},
    {name: "name4", price: "1234", sizes:"48, 50, 52", pictures:"/img/bruki.png", colors:"dfbdshfshdfbadsfsdkfhlgsd"},
    {name: "name5", price: "1234", sizes:"48, 50, 52", pictures:"/img/bruki.png", colors:"dfbdshfshdfbadsfsdkfhlgsd"},
    {name: "name16", price: "1234", sizes:"48, 50, 52", pictures:"/img/bruki.png", colors:"dfbdshfshdfbadsfsdkfhlgs"},]

    return(
        <div className="catalogWrapper">
            <div className="navigation">
                <h className="headLine">Каталог</h>
                <Link className="catNav">Все товары</Link>
                <Link className="catNav">Блузы</Link>
                <Link className="catNav">Брюки</Link>
                <Link className="catNav">Комбинезоны</Link>
            </div>
            <div className="cardsSection">
                <Link to="/cart">
                    <div className="cart">
                        <img src="img/cart.png" alt="cart_icon"></img>
                    </div>
                </Link>
                <div className="Cards">
                    {shopArr.map((obj)=>(
                        <ShopCard 
                        name={obj.name}
                        price={obj.price}
                        sizes={obj.sizes}
                        picture={obj.pictures}
                        colors={obj.colors}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;