import { Link } from 'react-router-dom';
import '../css/reg.css';

function Auth(){

    return(
        <div className="RegContainer">
            <div className="RegBlock">
                <div className='formBlock'>
                    <h>Регистрация</h>
                    <p>Имя или почта</p>
                    <input className='textBlock' type="text" name="userName" placeholder="Имя пользователя или Email"></input>
                    <p>Пароль</p>
                    <input className='textBlock' type="text" name="password" placeholder="Пароль"></input>                
                </div>
                <button className='RegBtn'>Зарегистрироваться</button>
                <Link to="/registration" className='ToReg'><div>Зарегистрироваться</div></Link>
            </div>
        </div>
    );
}

export default Auth;