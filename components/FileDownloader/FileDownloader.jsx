import {ydiskURL, ydiskUploader} from '../../service/PageService';

const FileDownloader = ({ download }) => {
    async function handleSubmit (download) {
        let fileNames = download.map((item) => {
            return item.title
        })
        const ydiskGET = await ydiskURL(fileNames); 
        console.log('Ссылки для загрузки файлов', ydiskGET);

        const ydiskPUT = await ydiskUploader(ydiskGET, download)

    }

    return (
        <div>
            <button
                onClick={() => {
                    if (download) {
                        handleSubmit(download)
                    }
                }}
            >
                Download</button>
        </div>
    )
}
 
export default FileDownloader;