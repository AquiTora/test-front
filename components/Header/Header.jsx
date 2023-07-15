import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import style from './Header.module.scss';
import InputField from './InputField/InputField';
import Menu from './Menu/Menu';
import Burger from '../Burger/Burger';


const Header = (props) => {
    const [search, setSearch] = useState(false);    //Будет время - сделаю выдвижной инпут
    const rootSearch = useRef(null);
    const rootSearch2 = useRef(null);

    return (
        <div className={style.header}>
            <InputField/>
            <Burger/>
            <Menu/>
        </div>
    )
}

export default Header;