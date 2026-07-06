export const API_CONFIG = {
    BACKEND_URL: 'https://culture-joshua-agree-clan.trycloudflare.com',
    ENDPOINTS: {
        chat: '/chat',
        health: '/health',
        config: '/config'
    }
};

export function getApiUrl(endpoint) {
    const baseUrl = API_CONFIG.BACKEND_URL;
    const path = API_CONFIG.ENDPOINTS[endpoint] || endpoint;
    return `${baseUrl}${path}`;
}
