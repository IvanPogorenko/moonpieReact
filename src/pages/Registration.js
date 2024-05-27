import { Link } from 'react-router-dom';
import '../css/reg.css';

function Registration(){

    return(
        <div className="RegContainer">
            <div className="RegBlock">
                <div className='formBlock'>
                    <h>Регистрация</h>
                    <p>Имя</p>
                    <input className='textBlock' type="text" name="userName" placeholder="Имя пользователя"></input>
                    <p>E-mail</p>
                    <input className='textBlock' type="text" name="email" placeholder="Email"></input>
                    <p>Пароль</p>
                    <input className='textBlock' type="text" name="password" placeholder="Пароль"></input>                
                    <p>Пароль</p>
                    <input className='textBlock' type="text" name="password" placeholder="Повторите пароль"></input>
                </div>
                <button className='RegBtn'>Зарегистрироваться</button>
                <Link to="/authorisation" className='ToAnotherAuth'><div>Войти</div></Link>
            </div>
        </div>
    );
}

export default Registration;