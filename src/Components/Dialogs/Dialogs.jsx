import React from 'react';
import style from './Dialogs.module.scss';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";


const Dialogs = (props) => {

    console.log(props.dialogsData);


    let DialogItem = props.dialogsData.map(dialog =>
        <DialogsItem id={dialog.id} name={dialog.name}/>);

    let Message = props.messagesData.map(message =>
        <MessagesItem id={message.id} message={message.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.onMessageChange(text);
    };


    return (
        <div className={style.dialogs}>
            <img
                src="https://images.pexels.com/photos/263532/pexels-photo-263532.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="img"/>
            <div>
                {DialogItem}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} value={props.newMessageText} ref={newMessageElement}
                              placeholder='Enter your message...'/>
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
                {Message}
            </div>
        </div>
    )
};

export default Dialogs;
