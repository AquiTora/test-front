import style from './DropDownMenu.module.scss';
import { useEffect, useRef, useState } from "react";

const menuItems = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now'];

const DropDownMenu = ({ show, setShow }) => {

    function handleChangeShow () {
        console.log(show);
        show === false ? setShow(true) : setShow(false);
    }
    
    return (
        <div className={style.dropDownMenu}>
            <div className={style.dropDownMenu__head}>
                <img src='/svg/Logotype.svg'/>
                <button onClick={handleChangeShow}>
                    <img src='svg/x.svg'/>
                </button>
            </div>

            <div className={style.dropDownMenu__hover}/>
            
            <ul className={style.dropDownMenu__nav}>
                {menuItems.map((item) => {
                    return (
                        <il>
                            <div 
                                className={style.dropDownMenu__menuBtn}
                            >
                                {item}
                                <img src='/svg/bottomArrow.svg'/>
                            </div>
                        </il>
                    )
                })}
            </ul>            
        </div>
    )
}

export default DropDownMenu;