import style from './Header.module.scss';
import InputField from './InputField/InputField';
import Menu from './Menu/Menu';

const Header = ({ setSearchRequest }) => {
    return (
        <div className={style.header}>
            <InputField
                setSearchRequest={setSearchRequest}
            />
            <Menu/>
        </div>
    )
}

export default Header;