const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function getAIResponse(
    chapterTitle: string,
    type: "concepts" | "formulas",
    name: string,
    baseExplanation?: string
): Promise<string> {
    // Cache key
    const cacheKey = `explanation_${chapterTitle}_${type}_${name}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        return JSON.parse(cached);
    }

    if (!OPENAI_API_KEY) {
        return "Legg til API-nøkkel i .env (lag den hvis den ikke fins) filen for å bruke AI funksjonaliteten.";
    }

    // Prompt for AI
    const prompt = `
        Du er en hjelpsom og kortfattet statistikkveileder. 
        Forklar ${type === "formulas" ? "formelen" : "begrepet"} "${name}" fra kapittelet "${chapterTitle}" 
        på en enkel og intuitiv måte for en student som lærer TMA4240 / TMA4245 Statistikk ved NTNU.
        ${baseExplanation ? `Grunnforklaring: ${baseExplanation}` : ""}
        Bruk norsk, og vær konkret uten å bruke formler med mindre nødvendig.
        Skriv for linjeskift der det er naturlig. Kom gjerne med både et praktisk eksempel. Lag gjerne en liste
        hvis det passer for å oppsummere.
        `;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.6
        })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch AI response: ${response.statusText}');
    }

    const data = await response.json();
    const aiText = data.choices[0]?.message?.content?.trim() || "Beklager, jeg kunne ikke hente en forklaring akkurat nå.";

    // Cache the response
    if (aiText !== "Beklager, jeg kunne ikke hente en forklaring akkurat nå.") {
        localStorage.setItem(cacheKey, JSON.stringify(aiText));
    }
    return aiText;
}