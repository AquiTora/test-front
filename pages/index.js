import { useEffect, useRef, useState } from "react";
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';


export default function Home() {
    const [cards, setCards] = useState([]);
    const [searchRequest, setSearchRequest] =useState('');
    
    const fetchCardsData = () => {
        fetch('https://cloud.codesupply.co/endpoint/react/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCards(data);
            })
    }

    useEffect(() => {
        fetchCardsData();
    }, []);

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Header
                    setSearchRequest={setSearchRequest}
                />
                {cards.length > 0 && (
                    <Content 
                        searchRequest={searchRequest}
                        cards={cards}
                    />
                )}
            </main>
        </div>
    )
}