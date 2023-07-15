import style from './Burger.module.scss';
import { useEffect, useRef, useState } from "react";
import DropDownMenu from './DropDownMenu/DropDownMenu';

const Burger = () => {
    const [show, setShow] = useState('--show');
    
    function handleChangeShow () {
        show === '--show' ? setShow('') : setShow('--show');
    }

    return (
        <div className={style.burger}>
            <div 
                onClick={handleChangeShow}
                className={style.burger__menu}
            >
                <div className={style['burger__menu--lane']}/>
                <div className={style['burger__menu--lane']}/>
                <div className={style['burger__menu--lane']}/>
            </div>
            <div 
                className={`${style.burger__dropDownMenu} ${style[`burger__dropDownMenu${show}`]}`}
            >
                <DropDownMenu />
            </div>
                        
        </div>
    )
}

export default Burger;