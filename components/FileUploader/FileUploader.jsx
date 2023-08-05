import { useState } from "react";
import { ydiskURL, ydiskFileUploader } from "../../service/PageService";

const FileUploader = () => {
    const [file, setFile] = useState();
    const [fileList, setFileList] = useState(null);

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

    const handleFileChangeMulti = (e) => {
        setFileList(e.target.files);
    }

    const handleUploadClickMulti = async () => {
        if (!fileList) {
            return;
        }

        const data = new FormData();
        files.forEach((file) => {
            console.log('Что-то происходит');
            data.append(`file`, file, file.name);
        })
        const test = data.getAll('file');

        console.log('Что отправляем', test);
        let names = test.map((item) => {
            return item.name
        })

        const ydiskGET = await ydiskURL(names);
        console.log('Ссылки для загрузки', ydiskGET);

        const ydiskPUT = await ydiskFileUploader(ydiskGET, test)
        console.log('Результат загрузки', ydiskPUT);
    }

    const files = fileList ? [...fileList] : [];

    return (
        <div>
            <h1>Chose your file for upload</h1>

            <div>
                <h1>Тестовая отправка одного файла</h1>

                <input type='file' onChange={handleFileChange} />
                <div>{file && `${file.name} - ${file.type}`}</div>
                <button onClick={handleUploadClick}>Upload</button>
            </div>

            <div>
                <h1>Итоговая отправка нескольких файлов</h1>

                <input type='file' onChange={handleFileChangeMulti} multiple/>

                <ul>
                    {files.map((file, i) => (
                        <li key={i}>
                            {file.name} - {file.type}
                        </li>
                    ))}
                </ul>

                <button onClick={handleUploadClickMulti}>Upload</button>
            </div>            
        </div>
    )
}

export default FileUploader;