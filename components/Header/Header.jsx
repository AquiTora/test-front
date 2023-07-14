import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import InputField from './InputField/InputField';
import Menu from './Menu/Menu';
import style from './Header.module.scss';

const Header = (props) => {
    const [search, setSearch] = useState(false);
    const rootSearch = useRef(null);
    const rootSearch2 = useRef(null);

    return (
        <div className={style.header}>
            <InputField/>
            <Menu/>
        </div>
    )
}

export default Header;