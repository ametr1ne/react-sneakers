import React, {useContext} from 'react';
import './Info.scss'
import {AppContext} from "../App";

const Info = ({img, title, desc}) => {
    const {onCloseAside} = useContext(AppContext)
    return (
        <div className="cartEmpty">
            <img width={120} src={img} alt="empty"/>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button onClick={onCloseAside}>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7144 7L1.00007 7" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
                Вернуться назад
            </button>
        </div>
    );
};

export default Info;