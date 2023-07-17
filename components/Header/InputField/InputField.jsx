import style from './InputField.module.scss';
import { useEffect, useRef, useState } from "react";

const InputField = ({ setSearchRequest }) => {
    const [search, setSearch] = useState(false);
    const [text, setText] = useState('');
    const rootSearch = useRef(null);
    const rootSearch2 = useRef(null);

    useEffect(() => {
        const onClick = (e) => {
            rootSearch2.current.contains(e.target, setSearch(true)) ||
                rootSearch.current.contains(e.target) || 
                setSearch(false);
                setSearchRequest('');
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    function handleChangeText (e) {
        setText(e.target.value);
    }

    return (
        <div className={style.inputField}>
            <img src='/svg/Logotype.svg'/>

            <button 
                ref={rootSearch2}
                onClick={() => {
                    search === false ? setSearch(true) : setSearchRequest(text);
                }}
            >
                <img src='/svg/Search.svg'/>
            </button>

            <div 
                className={style.inputSection}
                ref={rootSearch}
                style={
                    search
                        ? { 
                              transform: "translate(12px, 0)",
                              top: "22px"
                        }
                        : {
                              position: "absolute",
                              top: "22px",
                              transform: "translate(900px, 0)",
                        }
                }
            >                
                <input 
                    onChange={handleChangeText}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setSearchRequest(text);
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default InputField;