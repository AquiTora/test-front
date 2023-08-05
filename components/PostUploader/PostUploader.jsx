import { ydiskURL, ydiskUploader } from '../../service/PageService';

const PostUploader = ({ upload }) => {
    async function handleSubmit (upload) {
        let fileNames = upload.map((item) => {
            return item.title
        })

        const ydiskGET = await ydiskURL(fileNames); 

        const ydiskPUT = await ydiskUploader(ydiskGET, upload);
        console.log('результат', ydiskPUT);
    }

    return (
        <div>
            <button
                onClick={() => {
                    if (upload) {
                        handleSubmit(upload)
                    }
                }}
            >
                Upload</button>
        </div>
    )
}
 
export default PostUploader;