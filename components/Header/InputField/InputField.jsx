import style from './InputField.module.scss';

const InputField = () => {
    return (
        <div className={style.inputField}>
            <img src='/svg/Logotype.svg'/>

            <div className={style.inputSection}>
                <button>
                    <img src='/svg/Search.svg'/>
                </button>
                <input/>
            </div>
        </div>
    )
}

export default InputField;