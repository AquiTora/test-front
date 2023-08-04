import style from './Modal.module.scss';

const Modal = ({ active, setActive, download, setDownload, children}) => {
    function handleAddDownload(title, text) {
        let data = download;
        let addData = {
            title: title,
            text: text
        }
        data.push(addData);

        setDownload(data);
    }

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
                <button
                    onClick={() => handleAddDownload(children[0].props.children, children[1].props.children)}
                >
                    Add to download
                </button>
            </div>
        </div>
    )
}

export default Modal;