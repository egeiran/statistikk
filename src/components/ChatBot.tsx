import { useEffect, useState } from "react";
import { chapters } from "../data/chapters";
import { BlockMath } from "react-katex";
import { getAIResponse } from "../lib/aiHandler";

import MathText from "./MathText";

type ChatBotProps = {
  chapterId: number;
};

export default function ChatBot({ chapterId }: ChatBotProps) {
    const [mode, setMode]  = useState<"concepts" | "formulas" | null>(null);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [aiResponse, setAIResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const chapter = chapters.find(c => c.id === chapterId);

    useEffect(() => {
        setAIResponse(null);
        setLoading(false);
    }, [chapterId, selectedItem]);

    const items =
        mode === "formulas"
            ? chapter?.formulas.map(f => f.title)
            : mode === "concepts"
                ? chapter?.concepts.map(c => c.term)
                : [];
    
    async function handleAskAI(){
        if (!selectedItem || !mode || !chapter) return;
        setLoading(true);
        setAIResponse(null);
        try {
            const response = await getAIResponse(chapter.title, mode, selectedItem);
            setAIResponse(response);
        } catch (error) {
            setAIResponse("Noe gikk galt. Vennligst prøv igjen senere.");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">
                ChatBot 
            </h3>
            {/* Mode selection buttons */}
            <div className="mb-4 flex space-x-2 gap-2">
                <button
                onClick={() => {
                    setMode("formulas");
                    setSelectedItem(null);
                }}
                className={`px-3 py-2 rounded-md ${
                    mode === "formulas"
                    ? "bg-emerald-700 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
                >
                    Formler
                </button>
                <button
                onClick={() => {
                    setMode("concepts");
                    setSelectedItem(null);
                }}
                className={`px-3 py-2 rounded-md ${
                    mode === "concepts"
                    ? "bg-emerald-700 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
                >
                    Begreper
                </button>
                {/* Ask AI button all the way to the right */}
                <button className="ml-auto px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50" 
                    onClick={handleAskAI}
                    disabled={!selectedItem || loading}
                    >
                    {loading ? "Laster..." : "Spør AI"}
                </button>
            </div>

            {/* Item list */}   
            <div className="flex-1 overflow-y-auto mb-4">
                {items && items.length > 0 ? (
                    <ul className="space-y-2">
                        {items.map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className={`w-full text-left px-3 py-2 rounded-md ${
                                        selectedItem === item
                                        ? "bg-emerald-600 text-white"
                                        : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                                    }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-zinc-500">Velg en modus for å se elementer.</p>
                )}
            </div>
            {/* Selected item details */}
            <div className={`h-40 overflow-y-auto grid grid-cols-2 gap-4 ${aiResponse ? "mb-1" : ""}`}>
                {selectedItem ? (
                    mode === "formulas" ? (
                        (() => {
                            const formula = chapter?.formulas.find(f => f.title === selectedItem);
                            return formula ? (
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">{formula.title}</h4>
                                    <p className="text-zinc-400 mb-2"><MathText text={formula.explanation} /></p>
                                    <div className="bg-zinc-950 rounded-md p-3 text-center overflow-x-auto">
                                        <p className="font-mono text-sm"><BlockMath  math={formula.formula}/></p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-zinc-500">Formel ikke funnet.</p>
                            );
                        })()
                    ) : mode === "concepts" ? (
                        (() => {
                            const concept = chapter?.concepts.find(c => c.term === selectedItem);
                            return concept ? (
                                <div>
                                    <h4 className="text-lg font-semibold mb-2"><MathText text={concept.term} /></h4>
                                    <p className="text-zinc-400"><MathText text={concept.definition} /></p>
                                </div>
                            ) : (
                                <p className="text-zinc-500">Begrep ikke funnet.</p>
                            );
                        })()
                    ) : null
                ) : (
                    <p className="text-zinc-500">Velg et element for å se detaljer.</p>
                )}
            </div>
            {aiResponse && (
                <div className="mt-1 p-3 bg-blue-900 border border-blue-700 rounded-md">
                    <h4 className="text-md font-semibold mb-2">AI Svar:</h4>
                    <div className="flex flex-col gap-2">
                    {aiResponse.split("\n").map((line, index) => (
                        <p key={index} className="text-zinc-200 whitespace-pre-line">{line}</p>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}