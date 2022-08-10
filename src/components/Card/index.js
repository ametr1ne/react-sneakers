import React, {useState} from 'react';
import styles from './Card.module.scss';

const Index = ({name, price, imageUrl, onFavorite, onPlus}) => {
    const [added, setAdded] = useState(false)
    const [liked, setLiked] = useState(false)
    const likeSneaker = () => {
        setLiked(!liked)
    }
    const addSneaker = () => {
        onPlus({name, price, imageUrl})
        setAdded(!added)
    }
    return (
        <div className={styles.card}>
            {liked ? <LikedBtn onUnlike={likeSneaker}/> : <UnlikedBtn onLike={likeSneaker}/>}
            <img width={140} src={imageUrl} alt="1"/>
            <p>{name}</p>
            <div className={styles.bottom}>
                <div className={styles.price}>
                    <p>Цена:</p>
                    <b>{price} руб.</b>
                </div>
                {added ? <AddedBtn onRemove={addSneaker}/> : <PlusBtn onAdd={addSneaker}/>}
            </div>
        </div>
    );
};

function UnlikedBtn(props) {
    return (
        <button className={styles.favBtn} onClick={props.onLike}>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.149 2.35598L13.1484 2.35544C12.8095 2.02581 12.4097 1.76359 11.9705 1.58328L11.9696 1.58291C11.5139 1.39507 11.0249 1.29886 10.5311 1.29999L10.5295 1.29999C9.83464 1.29999 9.15837 1.48873 8.57168 1.84385L8.57166 1.84386C8.4313 1.92882 8.29851 2.02179 8.17303 2.12277L7.73415 2.47599L7.29527 2.12277C7.16979 2.02179 7.037 1.92882 6.89663 1.84386L6.89661 1.84385C6.30993 1.48873 5.63366 1.29999 4.93883 1.29999C4.43728 1.29999 3.95462 1.39501 3.49871 1.58292L3.49796 1.58323C3.05699 1.76437 2.6606 2.02431 2.31966 2.35565L2.3187 2.35658L2.3187 2.35657C1.98111 2.6834 1.71174 3.07247 1.52557 3.50161L13.149 2.35598ZM13.149 2.35598C13.4865 2.68348 13.756 3.07283 13.9429 3.50209C14.1365 3.94861 14.2347 4.42031 14.2333 4.90641V4.90841C14.2333 5.36255 14.1399 5.85119 13.9418 6.36514L13.9412 6.36674M13.149 2.35598L13.9412 6.36674M4.37988 10.1131L4.37995 10.1132C5.12906 10.7996 5.87729 11.3822 6.44748 11.7988C6.73204 12.0066 6.97087 12.1721 7.14149 12.2873C7.22678 12.345 7.29482 12.3899 7.34278 12.4212C7.39359 12.4543 7.41705 12.469 7.41553 12.468L7.42662 12.4748L7.42655 12.4749L7.73332 12.6701L8.04008 12.4749L8.04022 12.4748C8.09141 12.4423 9.58223 11.4902 11.0868 10.1131H4.37988ZM4.37988 10.1131C3.47528 9.28445 2.76336 8.48184 2.25505 7.72992M4.37988 10.1131L2.25505 7.72992M13.9412 6.36674C13.7771 6.7954 13.5328 7.25421 13.2114 7.73026M13.9412 6.36674L13.2114 7.73026M2.25505 7.72992C1.93467 7.25534 1.69124 6.79603 1.52486 6.36515L2.25505 7.72992ZM13.2114 7.73026C12.7031 8.48203 11.9913 9.28446 11.087 10.1129L13.2114 7.73026ZM1.23333 4.90841C1.23333 4.4208 1.33184 3.9483 1.52554 3.50166L1.52472 6.36479C1.32672 5.85096 1.23333 5.36244 1.23333 4.90841Z"
                    stroke="#ECECEC" strokeWidth="1.4"/>
            </svg>
        </button>
    )
}

function LikedBtn(props) {
    return (
        <button className={styles.favBtn + ' ' + styles.favBtnLiked} onClick={props.onUnlike}>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
                    fill="#FF8585"/>
            </svg>
        </button>
    )
}

function PlusBtn(props) {
    return (
        <button className={styles.addBtn + ' ' + styles.notAdded} onClick={props.onAdd}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
                    fill="#D3D3D3"/>
            </svg>
        </button>
    )
}

function AddedBtn(props) {
    return (
        <button className={styles.addBtn + ' ' + styles.added} onClick={props.onRemove}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_60_202)">
                    <g filter="url(#filter0_d_60_202)">
                        <path
                            d="M9.6567 1.62069C9.83936 1.43633 10.0876 1.33177 10.3471 1.32986C10.6066 1.32795 10.8563 1.42884 11.0416 1.61049C11.227 1.79214 11.3329 2.03977 11.3362 2.29927C11.3395 2.55877 11.24 2.80903 11.0594 2.99536L5.83271 9.52936C5.74292 9.62603 5.63456 9.70362 5.51412 9.75749C5.39368 9.81136 5.26362 9.84041 5.1317 9.8429C4.99979 9.84539 4.86872 9.82127 4.74633 9.77198C4.62394 9.72269 4.51274 9.64924 4.41937 9.55602L0.954039 6.09202C0.76989 5.90779 0.666472 5.65794 0.666534 5.39746C0.666597 5.13697 0.770135 4.88717 0.954372 4.70302C1.13861 4.51888 1.38845 4.41546 1.64894 4.41552C1.90943 4.41558 2.15922 4.51912 2.34337 4.70336L5.08404 7.44469L9.6307 1.65136C9.63897 1.64082 9.64787 1.6308 9.65737 1.62136L9.6567 1.62069Z"
                            fill="white"/>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_d_60_202" x="0.666534" y="1.32983" width="10.6698" height="10.5132"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_202"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_202"
                                 result="shape"/>
                    </filter>
                    <clipPath id="clip0_60_202">
                        <rect width="10.6667" height="10.6667" fill="white"
                              transform="translate(0.666718 0.666687)"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}

export default Index;