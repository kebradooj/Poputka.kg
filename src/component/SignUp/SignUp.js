import React, { Component } from 'react';

import './SignUp.css'

class SignUp extends Component {
    render() {
        return (
         <div className ='container'>
            <div className ='main'>
                <div className ='post'>
                <h1>ВХОД НА САЙТ</h1>
                    <div>
                        <input className ='inp_1' placeholder="  Номер телефона" ></input>
                    </div>
                    <div>
                        <input className ='inp_2' placeholder="  Введите пароль" ></input>
                    </div>
                    <div className='box'>
                        <input className='rememberBox' type='checkbox'></input>
                        <span>Запомнить</span>
                    </div>
                    <div >
                        <a href='./https://www.mashina.kg/login/'> 
                        <button className='submit'>ВОЙТИ</button>
                        </a>
                    </div>
                    <div className='link_1'>
                        <a className='registration'>Забыли пароль?</a>
                    </div>
                    <div className='link_2'>
                        <a className='registration'>Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SignUp;