export const getAllCards = async () => {
    const res = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
    const data = await res.json();

    return data;
}

export const ydiskToken = async () => {
    const response = await fetch('https://cloud-api.yandex.net/v1/disk/resources/upload?path=%2FНовая%20папка%2Flonk.png', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "OAuth y0_AgAAAABv0twDAApJsQAAAADpZviN9fl0xwYMQmKtcunXFSKH_dRpd-U"
        }
    });

    const data = await response.json();

    return data;
}

export const ydiskUploader = async (request) => {        
    const response = await fetch(request.href, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "OAuth y0_AgAAAABv0twDAApJsQAAAADpZviN9fl0xwYMQmKtcunXFSKH_dRpd-U"
        },
    });

    return response
}