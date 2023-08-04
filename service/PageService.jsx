export const getAllCards = async () => {
    const res = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
    const data = await res.json();

    return data;
}