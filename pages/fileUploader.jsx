import Link from 'next/link';
import FileUploader from '../components/FileUploader/FileUploader';

export default function fileUploader () {
    return (
        <div>
            <Link href='/'>To main page</Link>
            <FileUploader />
        </div>
    )
}