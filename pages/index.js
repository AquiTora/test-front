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
    const [lastScrollY, setLastScrollY] = useState(200);
    
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

    return (
        <div className={style.home}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div className={style.header}>
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