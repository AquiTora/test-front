const persons = {
    name: 'Vadim',
    lName: 'Maksim'
}

// Получение тестовых данных
export const getAllCards = async () => {
    const res = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
    const data = await res.json();

    return data;
}

// Получение ссылки для загрузки на Яндекс.диск
export const ydiskURL = async (fileNames) => {
    const data = [];
    if (Array.isArray(fileNames)) {
        let names = fileNames.map((item) => {
            let name = item.replace(/ /g, '');
            // Посмотреть: можно ли через 1 реплейс все заменить
            name = name.replace(/[^a-z]/ig, '');
            let urlName = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=test/${name}&overwrite=true`

            return urlName;
        });

        for (let f = 0; f < fileNames.length; f++) {
            let response = await fetch(names[f], {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "OAuth y0_AgAAAABv0twDAApJsQAAAADpZviN9fl0xwYMQmKtcunXFSKH_dRpd-U"
                }
            });

            let res = await response.json();

            data.push(res);
        }
    } else {
        let urlName = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=test/${fileNames}&overwrite=true`
        let response = await fetch(urlName, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "OAuth y0_AgAAAABv0twDAApJsQAAAADpZviN9fl0xwYMQmKtcunXFSKH_dRpd-U"
            }
        });

        let res = await response.json();

        return res;
    }
    

    return data;
}

// Отправка постов на Яндекс.диск
export const ydiskUploader = async (url, fileContent) => {     
    let data;

    for (let f = 0; f < url.length; f++) {
        data = await fetch(url[f].href, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: 
                `${fileContent[f].title}
                ${fileContent[f].text}`
        })    
    }

    return data;
}

// Отправка файлов на Яндекс.диск
export const ydiskFileUploader = async (url, file) => {
    if (Array.isArray(url)) {
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
    } else {
        const data = await fetch(url.href, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: file
        })

        return data;
    }

    
}