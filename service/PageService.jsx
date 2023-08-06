// Получение тестовых данных
export const getAllCards = async () => {
    const res = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
    const data = await res.json();

    return data;
}

// Получение ссылки для загрузки на Яндекс.диск
export const ydiskURL = async (fileNames, token) => {
    const data = [];
    let names = fileNames.map((item) => {
        let name = item.replace(/ /g, '');
        let urlName = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=test/${name}&overwrite=true`

        return urlName;
    });

    for (let f = 0; f < fileNames.length; f++) {
        let response = await fetch(names[f], {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `OAuth ${token}`
            }
        });

        let res = await response.json();

        data.push(res);
    }
    
    return data;
}

// Отправка файлов на Яндекс.диск
export const ydiskFileUploader = async (url, file) => {
    let data;
    for (let f = 0; f < url.length; f++) {
        data = await fetch(url[f].href, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: file[f]
        })
    }

    return data;     
}