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
        let name = item.replace(/ /g, '%20');

        return name;
    });

    // console.log('Замененные имена для запроса', names);

    for (let f = 0; f < fileNames.length; f++) {
        let response = await fetch(`https://cloud-api.yandex.net/v1/disk/resources/upload?path=%2FНовая%20папка%2${names[f]}.txt&overwrite=true`, {
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
    // let data;
    const response = [];

    console.log('URL', url[0].href);
    console.log('Финальный контент', fileContent[0].text);

    for (let f = 0; f < url.length; f++) {
        data = await fetch(url[f].href, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "OAuth y0_AgAAAABv0twDAApJsQAAAADpZviN9fl0xwYMQmKtcunXFSKH_dRpd-U"
            },
            body: `govno`
        })    
        response.push(data);
    }

    // const response = await fetch(url[0].href, {
    //     method: 'PUT',
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": "OAuth y0_AgAAAABv0twDAApJsQAAAADpZviN9fl0xwYMQmKtcunXFSKH_dRpd-U"
    //     },
    //     body: `${fileContent[0].title}\d${fileContent[0].text}`
    // });

    return response
}