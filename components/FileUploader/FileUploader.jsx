import { useState } from "react";
import style from './FileUploader.module.scss';
import { ydiskURL, ydiskFileUploader } from "../../service/PageService";
import Modal from "../Modal/Modal";

const FileUploader = ({ token }) => {
    const [fileList, setFileList] = useState(null);
    const [toMany, setToMany] = useState(false);
    const [send, setSend] = useState(false);
    const [fail, setFail] = useState(false);
    const [tokenVer, setTokenVer] = useState(false);
    const files = fileList ? [...fileList] : [];

    const handleFileChange = (e) => {
        setFileList(e.target.files);
    }

    const handleUploadClick = async () => {
        if (!fileList) {
            return;
        } else if (files.length > 100) {
            setToMany(true);
            return;
        } else if (!token) {
            setTokenVer(true);
            return;            
        }

        let names = files.map((item) => {
            return item.name
        })

        const ydiskGET = await ydiskURL(names, token);

        const ydiskPUT = await ydiskFileUploader(ydiskGET, files)

        if (ydiskPUT.status == 201) {
            handleClearAll();
            setSend(true);
        } else if (ydiskPUT.status != 201) {
            handleClearAll();
            setFail(true);
        }
    }

    const handleClearAll = () => {
        setFileList(null);
        files.length = 0;
    }

    

    return (
        <div className={style.fileUploader}>
            <h1>Chose your files for upload</h1>

            <div className={style.fileUploader__inputForm}>
                <input type='file' onChange={handleFileChange} multiple/>

                <ul>
                    {files.map((file, i) => (
                        <li key={i}>
                            {file.name} - {file.type}
                        </li>
                    ))}
                </ul>

                <button onClick={handleUploadClick}>Upload</button>
                <button onClick={handleClearAll}>Clear all</button>
            </div>   

            <Modal
                active={tokenVer}
                setActive={setTokenVer}
            >
                <h1>The token is missing</h1>
            </Modal>

            <Modal
                active={send}
                setActive={setSend}
            >
                <h1>Files sent successfully</h1>
            </Modal>

            <Modal
                active={fail}
                setActive={setFail}
            >
                <h1>An error occurred</h1>
            </Modal>

            <Modal 
                active={toMany}
                setActive={setToMany}
            >
                <h1>To many files</h1>
            </Modal>
        </div>
    )
}

export default FileUploader;