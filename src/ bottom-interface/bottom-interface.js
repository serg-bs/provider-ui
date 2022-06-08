import React from "react";
import "./bottom-interface.css"

const BottomInterface = () => {

    return(
        <div>
            <p className="price__block contacts__text">
                Стоимость услуги вы можете уточнить по телефону горячей линнии
                <a href="8 (800) 550-33-33"> 8 (800) 550-33-33</a>
                <pre> (звонок бесплатный)</pre>
        <div className="Bottom-position">
            <div className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__block">
                            <h4 className="footer__title">Наши контакты</h4>
                        </div>
                        <div className="footer__block">

                        </div>
                        <div className="footer__block">

                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__text">
                    <div>Copyright © 2012-2021 ООО Телеком</div>
                    <div>
                        Made
                        <span>by Woltram</span>
                    </div>
                </div>
            </div>
        </div>
            </p>
        </div>
    )
}
export default BottomInterface