import { getApiUrl } from "../config/apiConfig";

/**
 * @param {Array<Object>} messages
 * @returns {Promise<string>}
 */
export async function perguntarIA(messages) {
    try {
        const chatUrl = getApiUrl('chat');
        console.log(`📨 Enviando para: ${chatUrl}`);

        const response = await fetch(chatUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages })
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.answer) {
            throw new Error("Resposta inválida do backend");
        }

        return data.answer;
    } catch (error) {
        console.error("❌ Erro ao chamar o backend da IA:", error);
        throw new Error("Falha na comunicação com a IA. Verifique se o backend está rodando.");
    }
}