import style from './Burger.module.scss';
import { useEffect, useRef, useState } from "react";
import DropDownMenu from './DropDownMenu/DropDownMenu';

const Burger = ({ setOpValue }) => {
    const [show, setShow] = useState(false);
    const rootMenu = useRef(null);
    const rootMenu2 = useRef(null);

    useEffect(() => {
        const onClick = (e) => {
            rootMenu2.current.contains(e.target, show) ||
                rootMenu.current.contains(e.target) ||
                setShow(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    
    function handleChangeShow () {
        show === false ? setShow(true) : setShow(false);
    }

    return (
        <div className={style.burger}>
            <div 
                ref={rootMenu2}
                onClick={handleChangeShow}
                className={style.burger__menu}
            >
                <div className={style['burger__menu--lane']}/>
                <div className={style['burger__menu--lane']}/>
                <div className={style['burger__menu--lane']}/>
            </div>

            <div className={style.burger__hover}/>

            <div 
                className={`${style.burger__dropDownMenu} ${style[`burger__dropDownMenu`]}`}
                ref={rootMenu}
                style={
                    show
                        ? { transfor: "translate(0, 0)"}
                        : {
                              position: "absolute",
                              transform: "translate(-900px, 0)"
                          }
                }
            >
                <DropDownMenu 
                    show={show}
                    setShow={setShow}
                />
            </div> 
        </div>
    )
}

export default Burger;