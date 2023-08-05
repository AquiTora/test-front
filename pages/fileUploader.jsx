import Link from 'next/link';
import { useState } from 'react';
import FileUploader from '../components/FileUploader/FileUploader';

export default function fileUploader () {
    return (
        <div>
            <h1>Бебес</h1>
            <Link href='/'>To main page</Link>
            <FileUploader />
        </div>
    )
}