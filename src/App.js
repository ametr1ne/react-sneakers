import './App.scss'
import './Header.scss'
import './Main.scss'
import './Aside.scss'
import Card from "./components/Card";
import Header from "./components/Header";
import Aside from "./components/Aside";
import {useEffect, useState} from "react";

function App() {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isOpened, setIsOpened] = useState(false)
    const [cartAmount, setCartAmount] = useState(0)

    useEffect(() => {
        fetch('https://62efb1e58d7bc7c2eb7e6b32.mockapi.io/items').then((res) => {
            return res.json()
        }).then((json) => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (sneakerItem) => {

        setCartItems( prev => [...prev, sneakerItem])

        cartItems.map((obj) => (
            setCartAmount(cartAmount + obj.price)
        ))
    }

    let className = 'App';
    if (isOpened) {
        className += ' overflow-hidden';
    }

    return (
        <div className={className}>
            {isOpened && <Aside items={cartItems} onClickCart={() => setIsOpened(false)}/>}
            <div className="wrapper">
                <Header onToggleCart={() => setIsOpened(true)} cartAmount={cartAmount}/>
                <main className="main">
                    <div className="banner">

                    </div>
                    <div className="content">
                        <div className="content__header">
                            <h2>Все кроссовки</h2>
                            <div className="search-box">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                        stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <input type="text" className="search" placeholder="Поиск..."/>
                            </div>
                        </div>
                        <div className="content__cards">
                            {items.map((obj) => (
                                <Card
                                    name={obj.name}
                                    price={obj.price}
                                    imageUrl={obj.imageUrl}
                                    onFavorite={() => {
                                        console.log('add to favorites')
                                    }}
                                    onPlus={onAddToCart}
                                    key={obj.id}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
