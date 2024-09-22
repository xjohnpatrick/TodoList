// src/lib/fetcher.js
const fetcher = async (url) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Error fetching data');
    }
    return response.json();
};

export default fetcher;
