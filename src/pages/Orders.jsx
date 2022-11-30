import React, {useContext, useEffect, useState} from 'react';
import Card from "../components/Card/Card";
import {Link} from "react-router-dom";
import '../Orders.scss'
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('http://localhost:3000/orders')
                setOrders(data)
                setIsLoading(false)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <main className={'main'}>
            <div className="content">
                {orders.length > 0 ?
                    <>
                        <div className="content__header">
                            <h2>Мои покупки</h2>
                        </div>
                        {(isLoading ? Array(8).fill({}) : orders).map((order) => (
                            <div className="order-item" key={order.id}>
                                <h3>Заказ #{order.id}</h3>
                                <div className="content__cards" key={order.id}>
                                    {
                                        order.items.map(item => (
                                            <Card
                                                key={item.id}
                                                isLoading={isLoading}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>
                                <p className="total-price">На сумму: {order.items.reduce((sum, item) => item.price + sum, 0)} руб.</p>
                            </div>
                        ))
                        }
                    </> :
                    <div className={'content__empty'}>
                        <div className="content__block">
                            <img width={70} src="/img/empty_favorites.png" alt="empty_favorites"/>
                            <h2>У вас нет заказов</h2>
                            <p>У вас еще не было покупок</p>
                            <Link to={'/'}>
                                <div className={'back-btn'}>
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                    </svg>
                                    Вернуться назад
                                </div>
                            </Link>
                        </div>
                    </div>}
            </div>
        </main>
    );
};

export default Orders;