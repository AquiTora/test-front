import { useEffect, useRef, useState } from "react";
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';


export default function Home() {
    const [card, setCard] = useState([]);
    
    const fetchCardData = () => {
        fetch('https://cloud.codesupply.co/endpoint/react/data.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCard(data);
            })
    }

    useEffect(() => {
        fetchCardData();
    }, []);

    console.log(card);


    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <Header/>
                {card.length > 0 && (
                    <Content card={card}/>
                )}
            </main>
        </div>
    )
}