import {ydiskURL, ydiskUploader} from '../../service/PageService';

const FileDownloader = ({ download }) => {
    async function handleSubmit (download) {
        let fileNames = download.map((item) => {
            return item.title
        })

        const ydiskGET = await ydiskURL(fileNames); 

        const ydiskPUT = await ydiskUploader(ydiskGET, download);
        console.log('результат', ydiskPUT);
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