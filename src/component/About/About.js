import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './About.css'

class About extends Component {
    render() {
        return (<>
            <Header/>
            <div className ='container'>
                <div className ='text'>
                    <h1>Как это работает</h1>
                </div>
                <div className ='main'>
                    <div className='post'>
                        <h2>Пассажирам</h2>
                        <span>Найдите водителя, которому по пути</span>
                    </div>
                    <div className='firstBlock'>
                    <div className='icon'>
                        <span className='one'>1</span>
                        <span> На панели навигации нажмите кнопку поиска </span>
                        <div className='svg'></div>
                    </div>
                    <div className='img'></div>
                    </div>
                    <div className='secondBlock'>
                        <div className='icon_1'>
                            <span className='two'>2</span>
                            <span>В открывшемся разделе укажите город отправления и прибытия</span>
                        </div>
                        <div className='img1'></div>
                    </div>
                    <div className='thirdBlock'>
                        <div className='icon_2'>
                            <span className='three'>3</span>
                            <span>Выберите поездку, которая подходит именно вам! Свяжитесь с водителем,
                                 задайте интересующие вас вопросы. Путешествуйте вместе!
                            </span>
                        </div>
                        <div className='img2'></div>
                    </div>
                    </div>
                    <div className ='main_1'>
                    <div className='post_1'>
                        <h2>Водителям</h2>
                        <span>Предложите поездку пассажирам</span>
                    </div>
                    <div className='firstBlock_1'>
                    <div className='icon_1'>
                        <span className='one_1'>1</span>
                        <span> На панели навигации нажмите кнопку предложить поездку </span>
                        <div className='svg_1'></div>
                    </div>
                    <div className='img_1'></div>
                    </div>
                    <div className='secondBlock_1'>
                        <div className='icon_1_1'>
                            <span className='two_1'>2</span>
                            <span>Войдите на сайт или зарегистрируйтесь</span>
                        </div>
                        <div className='img1_1'></div>
                    </div>
                    <div className='thirdBlock_1'>
                        <div className='icon_2_1'>
                            <span className='three_1'>3</span>
                            <span>Предложите свою поездку. Выберите город отправления и прибытия,
                                 укажите дату, время и стоимость места.</span>
                        </div>
                        <div className='fourthBlock'>
                            <div className='icon_3'>
                                <span className='four'>4</span>
                                <span>Путешествуйте вместе. Общайтесь, слушайте музыку или просто молчите с попутчиками вместе.</span>
                                <div className='img2_1'></div>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <Footer/>
            </>
        );
    }
}

export default About;