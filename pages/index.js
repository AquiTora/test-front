import { useEffect, useRef, useState } from "react";
import style from '../styles/Home.module.scss';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Modal from '../components/Modal/Modal';


export default function Home() {
    const [cards, setCards] = useState([]);
    const [searchRequest, setSearchRequest] = useState('');
    const [modalActive, setModalActive] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const fetchCardsData = () => {
        fetch('https://cloud.codesupply.co/endpoint/react/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCards(data);
            })
    };

    useEffect(() => {
        fetchCardsData();
    }, []);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 200) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(window.scrollY);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div 
                    className={
                        show 
                            ? style.header 
                            : `${style.header} ${style['header--hide']}`
                    }
                >
                    <Header
                        setSearchRequest={setSearchRequest}
                    />
                </div>
                {cards.length > 0 && (
                    <Content 
                        searchRequest={searchRequest}
                        cards={cards}
                        setActive={setModalActive}
                        setModalContent={setModalContent}
                    />
                )}
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                >
                    <h1>{modalContent.title}</h1>
                    <p>{modalContent.text}</p>
                </Modal>
            </main>
        </div>
    )
}