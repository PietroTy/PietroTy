/**
 * @param {Array<Object>} messages
 * @returns {Promise<string>}
 */
export async function perguntarIA(messages) {
    try {
        const response = await fetch("https://convinced-compatibility-solid-stays.trycloudflare.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages })
        });

        const data = await response.json();
        return data.answer;
    } catch (error) {
        console.error("Erro ao chamar o backend da IA:", error);
        throw new Error("Falha na comunicação com a IA.");
    }
}