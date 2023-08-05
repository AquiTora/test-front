import { useState } from "react";
import { ydiskURL, ydiskFileUploader } from "../../service/PageService";

const FileUploader = () => {
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = async () => {
        if (!file) {
            return;
        }

        console.log('Наш файл', file);

        const ydiskGET = await ydiskURL(file.name);
        console.log('Ссылка для отправки', ydiskGET);

        const ydiskPUT = await ydiskFileUploader(ydiskGET, file);
        console.log("Результат отправки", ydiskPUT);
    }

    return (
        <div>
            <h1>Chose your file for upload</h1>
            {/* <form> */}
            <input type='file' onChange={handleFileChange} />
            <div>{file && `${file.name} - ${file.type}`}</div>
            <button onClick={handleUploadClick}>Upload</button>
            {/* </form> */}
        </div>
    )
}

export default FileUploader;