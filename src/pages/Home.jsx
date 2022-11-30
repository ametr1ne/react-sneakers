import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {AppContext} from "../App";

const Home = ({
                  searchValue,
                  searchingItem,
                  setSearchValue,
                  onToggleFavorites,
                  onToggleCart,
                  isLoading
              }) => {

    const {items, cartItems, favorites} = useContext(AppContext)

    const renderItems = () => {

        const filteredItems = items.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading ? Array(8).fill({}) : filteredItems).map((obj, index) => (
            <Card
                key={obj.id ? obj.id : index}
                onToggleFavorites={onToggleFavorites}
                onToggleCart={onToggleCart}
                isLiked={favorites.some(item => item.id === obj.id)}
                isAddedToCart={cartItems.some(item => item.id === obj.id)}
                isLoading={isLoading}
                {...obj}
            />
        ))
    }
    return (
        <main className="main">
            <div className="banner">

            </div>
            <div className="content">
                <div className="content__header">
                    <h2>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h2>
                    <div className="search-box">
                        <svg className="search-ico" width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <input maxLength={20} onChange={searchingItem} value={searchValue} type="text"
                               className="search" placeholder="Поиск..."/>
                        {searchValue ? <button className="clearSearchField" onClick={() => setSearchValue('')}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                                    fill="#B5B5B5"/>
                            </svg>
                        </button> : null}
                    </div>
                </div>
                <div className="content__cards">
                    {renderItems()}
                </div>
            </div>
        </main>
    );
};

export default Home;