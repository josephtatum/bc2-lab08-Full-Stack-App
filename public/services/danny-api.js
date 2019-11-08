const URL = '/api';

export async function getDannys() {
    const url = `${URL}/dannys`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}