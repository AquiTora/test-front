import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import FileUploader from '../components/FileUploader/FileUploader';
import LinkBar from '../components/LinkBar/LinkBar';
import { useState } from 'react';

export default function fileUploader () {
    const [token, setToken] = useState();

    return (
        <div>
            <Head>
                <title>File uploader</title>
            </Head>

            <LinkBar 
                setToken={setToken}
            />
            <FileUploader 
                token={token}
            />
        </div>
    )
}