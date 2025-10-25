// services/aiService.js

const apiKey = atob("MTEzMDc3MTk0NjEzNDI2NjI5OTI3X2Q2YWMzOTI2ODkxM2MwYTQ=");

/**
 * @param {Array<Object>} messages
 * @returns {Promise<string>}
 */
export async function perguntarIA(messages) {
    try {
        const response = await fetch("https://chat.maritaca.ai/api/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "sabiazim-3",
                messages: messages,
                temperature: 0.7,
                max_tokens: 1500
            })
        });

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("Erro ao chamar a API da IA:", error);
        throw new Error("Falha na comunicação com a IA.");
    }
}