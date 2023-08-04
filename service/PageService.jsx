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
    let names = fileNames.map((item) => {
        let name = item.replace(/ /g, '');
        name = name.replace(/[^a-z]/ig, '');
        let urlName = `https://cloud-api.yandex.net/v1/disk/resources/upload?path=test/${name}.txt&overwrite=true`

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

    return data;
}

// Отправка файлов на Яндекс.диск
export const ydiskUploader = async (url, fileContent) => {     
    let data;

    for (let f = 0; f < url.length; f++) {
        data = await fetch(url[f].href, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: `govno`
        })    
    }

    return data;
}