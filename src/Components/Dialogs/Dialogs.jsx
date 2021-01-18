import React from 'react';
import style from './Dialogs.module.scss';
import DialogsItem from "./DialogItem/DialogItem";
import MessagesItem from "./Message/Message";
import dialogsPhoto from "../../assets/images/dialogsPhoto.png"
import MessageFormItem from "./FormItem/MessageFormItem";


const Dialogs = props => {
    console.log(props);
    let DialogItem = props.messagesPage.dialogsData.map(dialog =>
        <DialogsItem key={dialog.id} id={dialog.id} name={dialog.name}/>);

    let Message = props.messagesPage.messagesData.map(message =>
        <MessagesItem key={message.id} id={message.id} message={message.message}/>);


    let onSubmit = formData => {
       props.addMessage(formData.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <img
                src={dialogsPhoto}
                alt="img"/>
            <div>
                {DialogItem}
            </div>
            <div>
                <MessageFormItem onSubmit={onSubmit}/>
                {Message}
            </div>
        </div>
    )
};

export default Dialogs;
