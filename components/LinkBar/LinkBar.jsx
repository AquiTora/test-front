import Link from "next/link";
import { useState } from 'react';
import styles from './LinkBar.module.scss';

const LinkBar = ({ setToken }) => {
    const [string, setString] = useState();

    function handleChangeString(e) {
        setString(e.target.value);
    }

    function handleSetToken() {
        setToken(string);
    }
    
    return (
        <div className={styles.linkBar}>
            <div className={styles.linkBar__link}>
                <Link className={styles.myLink} href='/'>To main page</Link>
                <Link 
                    className={styles.myLink}
                    href='https://oauth.yandex.ru/authorize?response_type=token&client_id=9272213b2241480baf7bf914998bb351'
                >
                    Get debug token
                </Link>
            </div>

            <div className={styles.linkBar__tokenInput}>
                <input placeholder="Input token" onChange={handleChangeString}/>
                <button onClick={handleSetToken}>Write token</button>
            </div>            
        </div>
    )
}

export default LinkBar;