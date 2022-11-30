import './App.scss'
import './Header.scss'
import './Main.scss'
import './Aside.scss'
import Header from "./components/Header";
import Aside from "./components/Aside";
import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = createContext({})

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isOpened, setIsOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const searchingItem = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        async function fetchData() {

            setIsLoading(true)

            const cartItemsRes = await axios.get('http://localhost:3000/cartItems')
            const favoritesItemsRes = await axios.get('http://localhost:3000/favorites')
            const itemsRes = await axios.get('http://localhost:3000/items')

            setIsLoading(false)

            setCartItems(cartItemsRes.data)
            setFavorites(favoritesItemsRes.data)
            setItems(itemsRes.data)
        }

        fetchData();

    }, [])

    useEffect(() => {
        !isOpened ? document.body.style.overflow = 'visible' :
            document.body.style.overflow = 'hidden'
    }, [isOpened])

    const removeItem = (sneaker) => {
        axios.delete(`http://localhost:3000/cartItems/${sneaker.id}`)
        setCartItems(prev => prev.filter(item => item.id !== sneaker.id))
        console.log(cartItems)
    }

    const onToggleCart = async (sneaker) => {
        try {
            console.log(sneaker)
            if (cartItems.find(item => item.id === sneaker.id)) {
                let {data} = axios.delete(`http://localhost:3000/cartItems/${sneaker.id}`)
                console.log(data)
                setCartItems(prevState => prevState.filter(item => item.id !== sneaker.id))
            } else {
                const {data} = await axios.post('http://localhost:3000/cartItems', sneaker)
                setCartItems(prev => [...prev, data])
            }
        } catch (error) {
            alert('Sneaker was not added')
        }
    }

    const onToggleFavorites = async (sneaker) => {
        try {
            if (favorites.find(item => item.id === sneaker.id)) {
                let {data} = axios.delete(`http://localhost:3000/favorites/${sneaker.id}`)
                setFavorites(prevState => prevState.filter(item => item.id !== sneaker.id))
            } else {
                const {data} = await axios.post('http://localhost:3000/favorites', sneaker)
                setFavorites(prev => [...prev, data])
            }
        } catch (error) {
            alert('Sneaker was not added')
        }
    }

    const onCloseAside = () => {
        setIsOpened(false)
    }

    return (
        <AppContext.Provider value={{items, cartItems, favorites, onCloseAside, setCartItems, removeItem}}>
            <div className="App">
                <Aside
                    opened={isOpened}
                    cartSneakers={cartItems}
                    onCloseAside={onCloseAside}
                    removeItem={removeItem}
                />
                <div className="wrapper">
                    <Header onToggleCart={() => setIsOpened(true)}/>
                    <Routes>
                        <Route path={'/'} element={
                            <Home
                                searchValue={searchValue}
                                searchingItem={searchingItem}
                                setSearchValue={setSearchValue}
                                onToggleCart={onToggleCart}
                                onToggleFavorites={onToggleFavorites}
                                isLoading={isLoading}
                            />}
                        />
                        <Route path={'/favorites'} exact element={
                            <Favorites
                                onToggleFavorites={onToggleFavorites}
                                isLoading={isLoading}
                            />}
                        />
                        <Route path={'/orders'} exact element={<Orders/>}/>
                    </Routes>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
