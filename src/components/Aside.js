import React, {useContext, useState} from 'react';
import CartItem from "./CartItem/CartItem";
import Info from "./Info";
import axios from "axios";
import {useCart} from "../hooks/useCart";

const Aside = ({...props}) => {
    const [orderIsCompleted, setOrderIsCompleted] = useState(false)
    const [orderID, setOrderID] = useState(null)
    const [completingOrder, setCompletingOrder] = useState(false)

    const {cartItems, setCartItems, totalPrice} = useCart()

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const onClickOrderButton = async () => {
        try {
            console.log('hello')
            setCompletingOrder(true)
            const {data} = await axios.post('https://62efb1e58d7bc7c2eb7e6b32.mockapi.io/orders', {items: cartItems})
            setOrderID(data.id)
            setOrderIsCompleted(true)
            for (let i = 0; i < cartItems.length; i ++) {
                await axios.delete('https://62efb1e58d7bc7c2eb7e6b32.mockapi.io/cartItems/' + cartItems[i].defaultID)
                await delay(1000)
            }
            setCartItems([])
        } catch(error) {
            alert('Произошла ошибка при создании заказа :(')
        }
        setCompletingOrder(false)
    }

    return (
        <aside className={props.opened ? "aside opened" : "aside"} onClick={props.onCloseAside}>
            <div className="aside__content" onClick={e => e.stopPropagation()}>
                {props.cartSneakers.length > 0 ? <>
                    <button className="close-btn" onClick={props.onCloseAside}>
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
                            {(props.cartSneakers).map(sneaker => (
                                <CartItem
                                    key={sneaker.id}
                                    {...sneaker}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="aside__bottom">
                        <ul>
                            <li>
                                <p>Итого:</p>
                                <div></div>
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li>
                                <p>Налог 5%:</p>
                                <div></div>
                                <b>{Math.round(totalPrice * 0.05)} руб. </b>
                            </li>
                        </ul>
                        <button disabled={completingOrder} className="order-btn" onClick={() => onClickOrderButton()}>
                            { completingOrder ? 'Оформляем...' : <>Оформить заказ
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7H14.7143" stroke="white" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg></> }
                        </button>
                    </div>
                </> : (orderIsCompleted ?
                        <Info
                            img={"/img/order-completed.jpg"}
                            title={'Заказ оформлен!'}
                            desc={`Ваш заказ #${orderID} скоро будет передан курьерской доставке`}/> :
                        <Info
                            img={"/img/cartEmpty.png"}
                            title={'Корзина пустая'}
                            desc={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                        />
                )}
            </div>
        </aside>
    );
};

export default Aside;