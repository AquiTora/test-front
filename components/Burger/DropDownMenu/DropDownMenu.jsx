import style from './DropDownMenu.module.scss';
import { useEffect, useRef, useState } from "react";

const menuItems = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now'];
const subMenuItems = ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'];

const Option = (props) => {
    const [show, setShow] = useState('');

    return (
        <>
            <button 
                className={style.menu__menuBtn}
            >
                <div className={style.menu__menuBtn__logo}>
                    {props.item}
                    <img src='/svg/bottomArrow.svg'/>
                </div>
                
                <ul className={style[`menu__dropDawnMenu${show}`]}>
                    {subMenuItems.map((item, index) => {
                        if (index === subMenuItems.length - 1) {
                            return (
                                <li className={`${style.menu__list} ${style['menu__list--borderNon']}`}>
                                    <p>
                                        {item}
                                        <img src='/svg/rightArrow.svg'/>
                                    </p>
                                </li>
                            )
                        } 

                        return (
                            <li className={style.menu__list}>
                                <p>
                                    {item}
                                    <img src='/svg/rightArrow.svg'/>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </button>
        </>
    )
}

const DropDownMenu = () => {
    return (
        <div>
            <ul className={style.menu__nav}>
                {menuItems.map((item) => {
                    return (
                        <il>
                            <Option
                                item={item}
                            />
                        </il>
                    )
                })}
            </ul>            
        </div>
    )
}

export default DropDownMenu;