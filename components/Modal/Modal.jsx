import { Children } from 'react';
import style from './Modal.module.scss';

const Modal = ({ active, setActive, children}) => {
    function handleChangeActive() {
        setActive(false);
    }

    return (
        <div 
            className={active ? `${style.modal} ${style.active}` : style.modal} 
            onClick={handleChangeActive}
        >
            <div 
                className={active ? `${style.modal__content} ${style['modal__content--active']}` : style.modal__content} 
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;