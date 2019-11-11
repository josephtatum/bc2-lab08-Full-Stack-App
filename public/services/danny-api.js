const URL = '/api';

export async function getDannys() {
    const url = `${URL}/dannys`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export async function getDanny(id) {  
    const url = `${URL}/dannys/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getProfessions() {
    const url = `${URL}/professions`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export async function addDanny(danny) {
    const url = `${URL}/dannys`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(danny)
    });

    const data = await response.json();
    return data;
}

export async function deleteDanny(danny) {
    const url = `${URL}/dannys`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(danny)
    });

    const data = await response.json();
    return data;
}