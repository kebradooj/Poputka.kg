import React from 'react';
import './Registration.css';


class Registration extends React.Component {
    render() {
        return (
            
            <div className="container">
                <div className="main-registration">
              <div className="pop-card">
                  <h3>Зарегистрироваться</h3>
                  <div>
                      <input  className="inpu_1"  type="text" placeholder="Ваше имя"></input>
                  </div>
                  <div>
                      <input className="inpu_2"  type="tel" placeholder="Номер телефона"></input>
                  </div>
                  <div>
                      <input className="inpu_3"  type="password" placeholder="Придумайте пароль"></input>
                  </div>
                  <div>
                      <input className="inpu_4"  type="password-confirm" placeholder="Повторите пароль"></input>
                  </div>
                  <label className="pop-text-small">
                      <input className="pop-checkbox" type="checkbox"></input>
                      Я принимаю Условия использования
                  </label>
                  <div>
                      <button className="pop-button" type="submit">Готово</button>
                  </div>
                  <p>Уже зарегистрированы?<a className="link-registration" href='login'>Войти</a></p>
                  </div> 
                  </div>   
            </div> 
                   
        );
    }
}

export default Registration;