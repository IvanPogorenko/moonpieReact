import { useLocation } from 'react-router-dom';
import '../css/shopCard.css';

function ItemCard() {

    const location = useLocation()
    const {name} = location.state || "1234"

    return(
        <div className="ItemCardContainer">
            <div className='ItemCard'>
                <div className='PictureBlock'>
                    <img src='' alt='itemPicture'></img>
                </div>
                <div className='InfoBlock'>
                    <h className='name'>{name}</h>
                    <p>price</p>
                    <p>Цвет:</p>
                    <div className='RadioGroup'>
                        <div>
                            <input type="radio" class="input_data" name="color" value="blue" />
                            <label>голубой</label>
                        </div>
                        <div>
                            <input type="radio" class="input_data" name="color" value="black"/>
                            <label>черный</label>
                        </div>
                        <div>
                            <input type="radio" class="input_data" name="color" value="white"/>
                            <label>Белый</label>
                        </div>
                        <div>
                            <input type="radio" class="input_data" name="color" value="dark-blue"/>
                            <label>Темно-синий</label>
                        </div>
                    </div>
                    <p>Размер:</p>
                    <div className='RadioGroup'>
                        <div>
                            <input type="radio" class="input_data" name="size" value="46" />
                            <label>46</label>
                        </div>
                        <div>
                            <input type="radio" class="input_data" name="size" value="48"/>
                            <label>48</label>
                        </div>
                        <div>
                            <input type="radio" class="input_data" name="size" value="50"/>
                            <label>50</label>
                        </div>
                        <div>
                            <input type="radio" class="input_data" name="size" value="52"/>
                            <label>52</label>
                        </div>
                    </div>
                    <p>description</p>
                    <button className='addToCartBtn'>Добавить в карзину</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;