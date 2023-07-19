import style from './Modal.module.scss';

const Modal = ({ active, setActive, children}) => {
    return (
        <div 
            className={active ? `${style.modal} ${style['modal--active']}` : style.modal} 
            onClick={() => setActive(false)}
        >
            <div 
                className={active ? `${style.modal__content} ${style['modal__content--active']}` : style.modal__content} 
                onClick={e => e.stopPropagation()}
            >
                {children}
                <button onClick={() => setActive(false)}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;