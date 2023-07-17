import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import style from './Header.module.scss';
import InputField from './InputField/InputField';
import Menu from './Menu/Menu';
import Burger from '../Burger/Burger';


const Header = ({ setSearchRequest }) => {
    const [search, setSearch] = useState(false);
    const rootSearch = useRef(null);
    const rootSearch2 = useRef(null);

    return (
        <div className={style.header}>
            <InputField
                setSearchRequest={setSearchRequest}
            />
            <Burger/>
            <Menu/>
        </div>
    )
}

export default Header;