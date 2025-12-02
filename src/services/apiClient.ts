const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export async function apiGet<T>(path: string): Promise<T> {
    const url = `${API_BASE_URL}${path}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
    const url = `${API_BASE_URL}${path}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

export async function apiPut<T>(path: string, body: unknown): Promise<T> {
    const url = `${API_BASE_URL}${path}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

export async function apiDelete(path: string): Promise<void> {
    const url = `${API_BASE_URL}${path}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}
