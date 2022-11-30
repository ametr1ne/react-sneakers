import React, {useContext} from 'react';
import Card from "../components/Card/Card";
import {Link} from "react-router-dom";
import '../Favorites.scss'
import {AppContext} from "../App";

const Favorites = ({onToggleFavorites, isLoading}) => {
    const {favorites} = useContext(AppContext)
    return (
        <main className={'main'}>
            <div className="content">
                { favorites.length > 0 ?
                    <>
                        <div className="content__header">
                            <h2>Мои закладки</h2>
                        </div>
                        <div className="content__cards">
                            {favorites.map((obj) => (
                                <Card
                                    isLiked={true}
                                    onToggleFavorites={onToggleFavorites}
                                    key={obj.id}
                                    {...obj}
                                />
                            ))
                            }
                        </div>
                    </> :
                    <div className={'content__empty'}>
                        <div className="content__block">
                            <img width={70} src="/img/empty_favorites.png" alt="empty_favorites"/>
                            <h2>Закладок нет :(</h2>
                            <p>Вы ничего не добавляли в закладки</p>
                            <Link to={'/'}>
                                <div className={'back-btn'}>
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2" strokeLinecap="round"
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

export default Favorites;