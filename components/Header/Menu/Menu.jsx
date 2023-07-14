import style from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={style.menu}>
            <ul>
                <li>
                    Demos                    
                </li>
                <li>
                    Post
                </li>
                <li>
                    Features
                </li>
                <li>
                    Categories
                </li>
                <li>
                    Shop
                </li>
                <li>
                    Buy Now
                </li>
            </ul>
        </div>
    )
}

export default Menu;