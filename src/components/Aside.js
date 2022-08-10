import React from 'react';

const Aside = (props) => {
    return (
        <aside className="aside">
            <div className="aside__content">
                <button className="close-btn" onClick={props.onClickCart}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                            fill="#B5B5B5"/>
                    </svg>
                </button>
                <div className="aside__top">
                    <h3>Корзина</h3>
                    <div className="basket-items">
                        {props.items.map((item) => (
                            <div className="basket-item" key={item.id}>
                                <div className="basket-item__left">
                                    <img width={70} height={70} src={item.imageUrl} alt="1"/>
                                    <div className="basket-item__desc">
                                        <p>{item.name}</p>
                                        <b>{item.price}</b>
                                    </div>
                                </div>
                                <button className="remove-btn">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                            fill="#B5B5B5"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aside__bottom">
                    <ul>
                        <li>
                            <p>Итого:</p>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <p>Налог 5%:</p>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="order-btn">
                        Оформить заказ
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Aside;