import { useState } from 'react';
import style from './Menu.module.scss';

const menuItems = ['Demos', 'Post', 'Features', 'Categories', 'Shop', 'Buy Now'];
const subMenuItems = ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'];

const Option = (props) => {
    const [show, setShow] = useState('');
    const [border, setBorder] = useState('');

    function handleChangeShow () {
        show === '' ? setShow('--show') : setShow('');
    }

    return (
        <>
            <button 
                className={style.menu__menuBtn}
                onMouseEnter={handleChangeShow}
                onMouseLeave={handleChangeShow}
                // onClick={handleChangeShow}
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

const Menu = () => {
    return (
        <div className={style.menu}>
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

export default Menu;