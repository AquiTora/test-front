import style from './InputField.module.scss';
import { useEffect, useRef, useState } from "react";

const InputField = () => {
    const [search, setSearch] = useState(false);
    const rootSearch = useRef(null);
    const rootSearch2 = useRef(null);

    useEffect(() => {
        const onClick = (e) => {
            rootSearch2.current.contains(e.target, setSearch(true)) ||
                rootSearch.current.contains(e.target) || 
                setSearch(false);
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return (
        <div className={style.inputField}>
            <img src='/svg/Logotype.svg'/>

            <button 
                ref={rootSearch2}
                onClick={() => setSearch(true)}
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
                <input/>
            </div>
        </div>
    )
}

export default InputField;