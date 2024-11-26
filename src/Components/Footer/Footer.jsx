import React from 'react'
import logo from '../../assets/images/logo2.svg'
import footer1 from '../../assets/images/footer1.svg'
import footer2 from '../../assets/images/footer2.svg'
import qr from '../../assets/images/qr-cod.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container mx-auto px-4">
                <div className="footer_box">
                    <div className="footer_top">
                        <div className="footer_top_card">
                            <p className="footer_top_text">Новые проекты ПИК</p>
                            <a href='#!' className="footer_top_link">Узнать больше</a>
                        </div>
                        <div className="footer_top_card">
                            <p className="footer_top_text">+7 (495) 500 00 20</p>
                            <a href='#!' className="footer_top_link">Перезвоните мне </a>
                        </div>
                        <div className="footer_top_card">
                            <p className="footer_top_text">Есть жалобы или предложения?</p>
                            <a href='#!' className="footer_top_link">Обращение в ПИК</a>
                        </div>
                    </div>
                    <div className="footer_border"></div>
                    <div className="footer_main">
                        <ul className="footer_list">
                            <p className="footer_main_text">Регионы</p>
                            <li><a href="#!" className="footer_link">Москва - Благовещенск</a></li>
                            <li><a href="#!" className="footer_link">Санкт-Петербург - Южно-Сахалинск</a></li>
                            <li><a href="#!" className="footer_link">Казань - Тюмень</a></li>
                            <li><a href="#!" className="footer_link">Екатеринбург - Ярославль</a></li>
                            <li><a href="#!" className="footer_link">Нижний Новгород - Новороссийск</a></li>
                            <li><a href="#!" className="footer_link">Владивосток - Обнинск</a></li>
                            <li><a href="#!" className="footer_link">Хабаровск</a></li>
                        </ul>

                        <ul className="footer_list">
                            <p className="footer_main_text">Компания</p>
                            <li><a href="#!" className="footer_link">О компании</a></li>
                            <li><a href="#!" className="footer_link">Инвесторам</a></li>
                            <li><a href="#!" className="footer_link">For Investors</a></li>
                            <li><a href="#!" className="footer_link">Общество</a></li>
                            <li><a href="#!" className="footer_link">Пресса</a></li>
                            <li><a href="#!" className="footer_link">Карьера</a></li>
                            <li><a href="#!" className="footer_link">Тендеры</a></li>
                        </ul>
                        <ul className="footer_list">
                            <p className="footer_main_text">Мы в соцсетях</p>
                            <li><a href="#!" className="footer_link">ВКонтакте</a></li>
                            <li><a href="#!" className="footer_link">Telegram</a></li>
                            <li><a href="#!" className="footer_link">YouTube</a></li>
                        </ul>
                        <ul className="footer_list">
                            <p className="footer_main_text">Поддержка</p>
                            <li><a href="#!" className="footer_link">FAQ</a></li>
                            <li><a href="#!" className="footer_link">Онлайн покупка</a></li>
                            <li><a href="#!" className="footer_link">Экскурсии</a></li>
                            <li><a href="#!" className="footer_link">Контакты</a></li>
                            <li><a href="#!" className="footer_link">Противодействие мошенничеству</a></li>
                        </ul>
                    </div>
                    {/* <div className="footer_border"></div>
                    <div className="footer_bottom">
                        <div className="footer_bottom_box">
                            <a href="#!" className='footer_logo'>
                                <img src={logo} alt="" />
                            </a>
                            <div className="footer_bottom_card">
                                <p className="footer_bottom_subtitle">Приложение ПИК</p>
                                <div className="footer_bottom_cardmini">
                                    <img src={qr} alt="" />
                                    <div className="footer_bottom_card_links">
                                        <p className="footer_bottom_link"> <img src={footer1} alt="" />Скачайте из RuStore</p>
                                        <p className="footer_bottom_link"> <img src={footer2} alt="" />Доступно в AppGallery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom_box2">
                            <p className="footer_bottom_text">Все права на публикуемые на сайте pik.ru материалы принадлежат ПАО «ПИК СЗ» © 2000 — 2024.</p>
                            <div className="footer_bottom_text_box">
                                <div className="footer_bottom_card2">
                                    <p className="footer_bottom_text"> Пользователь уведомлен, что любые материалы,
                                        размещенные на сайте, являются объектами
                                        интеллектуальной собственности ПАО «ПИК СЗ»
                                        (правообладателя). Пользователь не вправе без
                                        предварительного письменного разрешения
                                        правообладателя осуществлять какие-либо действия
                                        с объектами интеллектуальной собственности,
                                        в противном случае, правообладатель оставляет
                                        за собой право на взыскание штрафов, предусмотренных
                                        законодательством РФ, а также на обращение
                                        в компетентные органы за защитой своих прав
                                        и законных интересов.
                                    </p>
                                    <p className="footer_bottom_text">
                                        Любая информация, представленная на данном сайте,
                                        носит исключительно информационный характер
                                        и ни при каких условиях не является публичной офертой,
                                        определяемой положениями статьи 437 ГК РФ.
                                    </p>
                                </div>
                                <div className="footer_bottom_card2">
                                    <p className="footer_bottom_text">
                                        Раскрытие информации ПАО «ПИК СЗ» также доступно
                                        в сети Интернет на странице информационного
                                        агентства, аккредитованного ЦБ РФ на раскрытие
                                        информации — ООО «Интерфакс-ЦРКИ»
                                    </p>
                                    <p className="footer_bottom_text">
                                        Раскрытие информации ООО «ПИК-Корпорация»
                                        (подконтрольная организация ПАО «ПИК СЗ») доступно
                                        в сети Интернет на странице информационного
                                        агентства, аккредитованного ЦБ РФ на раскрытие
                                        информации — ООО «Интерфакс-ЦРКИ»
                                    </p>
                                    <p className="footer_bottom_text">
                                        ПАО Сбербанк. Генеральная лицензия Банка России
                                        на осуществление банковских операций № 1481
                                        от 11.08.2015 г.
                                        Защита от спама reCAPTCHA.
                                        Конфиденциальность и условия использования.
                                    </p>
                                </div>
                            </div>
                            <p className="footer_bottom_text">Продолжая использовать сайт, вы принимаете пользовательское соглашение</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
