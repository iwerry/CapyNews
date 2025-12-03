// API Configuration
const DEFAULT_API_URL = 'http://localhost:4000/api';
export const API_BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_API_URL;

// Log API URL in development for debugging
if (import.meta.env.DEV) {
    console.log('[CapyNews] API URL:', API_BASE_URL);
}

export async function apiGet<T>(path: string): Promise<T> {
    const url = `${API_BASE_URL}${path}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('fetch')) {
            // Network error - API não está acessível
            throw new Error('Não foi possível conectar à API. Verifique se o servidor está online.');
        }
        console.error('[API Error]', error);
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
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('fetch')) {
            throw new Error('Não foi possível conectar à API. Verifique se o servidor está online.');
        }
        console.error('[API Error]', error);
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
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data as T;
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('fetch')) {
            throw new Error('Não foi possível conectar à API. Verifique se o servidor está online.');
        }
        console.error('[API Error]', error);
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
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        if (error instanceof TypeError && error.message.includes('fetch')) {
            throw new Error('Não foi possível conectar à API. Verifique se o servidor está online.');
        }
        console.error('[API Error]', error);
        throw error;
    }
}
