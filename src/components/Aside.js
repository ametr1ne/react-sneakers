import React from 'react';
import CartItem from "./CartItem";

const Aside = (props) => {
    return (
        <aside className={props.opened ? "aside opened" : "aside"} onClick={props.onClickCart}>
            <div className="aside__content" onClick={e => e.stopPropagation()}>
                {props.cartSneakers.length > 0 ? <>
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
                            {props.cartSneakers.map(sneaker => (
                                <CartItem
                                    name={sneaker.name}
                                    price={sneaker.price}
                                    imageUrl={sneaker.imageUrl}
                                    key={sneaker.id}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="aside__bottom">
                        <ul>
                            <li>
                                <p>Итого:</p>
                                <div></div>
                                <b>{props.totalPrice} руб.</b>
                            </li>
                            <li>
                                <p>Налог 5%:</p>
                                <div></div>
                                <b>{Math.round(props.totalPrice * 0.05)} руб. </b>
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
                </> : <div className="cartEmpty">
                    <img width={120} src="/img/cartEmpty.png" alt="empty"/>
                    <h3>Корзина пустая</h3>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button onClick={props.onClickCart}>
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        Вернуться назад
                    </button>
                </div>}
            </div>
        </aside>
    );
};

export default Aside;