# Interaktiv Statistikk Læremodul

Et moderne React + TypeScript prosjekt for å lære **TMA4245 Statistikk** på en mer engasjerende måte.  
Appen inkluderer forklaringer, formler og quiz for hvert kapittel – med KaTeX for pen matematisk visning 🧮


## 🚀 Tech Stack

- **React + TypeScript** (via Vite)
- **Tailwind CSS v4.1**
- **React Router**
- **React KaTeX** for LaTeX-formler
- **Lucide Icons** for enkel, clean ikonbruk


## Hvordan kjøre prosjektet?

Klon prosjektet ned fra git. Gå inn i rotmappen.
Gå til terminalen og skriv

```
npm run dev
```

### AI Chat/Hjelp

For å kunne få hjelp av AI (integrert funksjon for å forklare begreper og formler) er man nødt til å

1. Lage en .env fil i rotmappen
2. Lage den lik som .env.example
3. Finne en OpenAI nøkkel som er aktiv (dette kan man lage selv på)
4. Legge den til etter `VITE_OPENAI_API_KEY`

_**Voila!**_


## Hvordan er den laget?

Jeg har brukt AI til å lage hele data mappen (src/data/chapters.ts) som har all informasjonen man trenger hentet rett fra [temasiden til faget](https://tma4245.math.ntnu.no).

Jeg har også brukt Co-pilot for å kode raskere, og spesielt mye av utseendet (fra Tailwind) er laget av Co-pilot.