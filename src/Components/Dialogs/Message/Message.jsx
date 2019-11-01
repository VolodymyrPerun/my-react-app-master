import React from 'react';
import style from './Message.module.css';


const MessagesItem = (props) => {
    return (
        <div className={style.messages}>
            <div>{props.message}</div>
        </div>
    )
};


export default MessagesItem;
