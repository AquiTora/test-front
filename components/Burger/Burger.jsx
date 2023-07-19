import style from './Burger.module.scss';

const Burger = ({ setActive, setShow }) => {
    return (
        <div className={style.burger}>
            <div 
                onClick={() => {
                    setShow(true);
                    setActive(true);
                }}
                className={style.burger__menu}
            >
                <div className={style['burger__menu--lane']}/>
                <div className={style['burger__menu--lane']}/>
                <div className={style['burger__menu--lane']}/>
            </div>

            <div className={style.burger__hover}/>
        </div>
    )
}

export default Burger;