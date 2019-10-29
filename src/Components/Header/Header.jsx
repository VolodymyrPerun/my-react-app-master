import React from 'react';
import style from './Header.module.css'; 

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Eye0vqol6GeqQQ_tVUzwsJfFUVZdfi4sngLUPmCgxImBcL0J2g&s'/>
        </header>
    )
};

export default Header;