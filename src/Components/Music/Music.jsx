import React from 'react';
import style from './Music.module.scss';

const Music = () => {
    return (
        <div>
            <img className={style.music}
                 alt='img'
                 src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            Music
        </div>
    )
};

export default Music;
