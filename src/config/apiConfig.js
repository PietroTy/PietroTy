/**
 * Configuração centralizada de URLs
 * Este arquivo é compartilhado entre frontend e backend
 * Atualize aqui quando a URL do backend mudar
 */

export const API_CONFIG = {
    // URL do backend - atualizada automaticamente por script
    BACKEND_URL: 'https://accountability-coordinates-stones-dns.trycloudflare.com',
    
    // Endpoints
    ENDPOINTS: {
        chat: '/chat',
        health: '/health',
        config: '/config'
    }
};

/**
 * Função auxiliar para construir URLs
 * @param {string} endpoint - Nome do endpoint (ex: 'chat')
 * @returns {string} URL completa
 */
export function getApiUrl(endpoint) {
    const baseUrl = API_CONFIG.BACKEND_URL;
    const path = API_CONFIG.ENDPOINTS[endpoint] || endpoint;
    return `${baseUrl}${path}`;
}

/**
 * Forma alternativa: importar do backend
 * Se quiser que o frontend sempre puxe URL do backend:
 * 
 * export async function getBackendConfig() {
 *     try {
 *         const response = await fetch('${API_CONFIG.BACKEND_URL}/config');
 *         const config = await response.json();
 *         return config.backendUrl;
 *     } catch (error) {
 *         console.error('Erro ao buscar config do backend:', error);
 *         return API_CONFIG.BACKEND_URL;
 *     }
 * }
 */
