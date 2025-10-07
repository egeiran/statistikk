import { BlockMath } from "react-katex";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react"; // npm i lucide-react
import MathText from "./MathText";

export type FormulaCardProps = {
  title: string;
  formula: string;
  explanation: string;
  importance?: "Lav" | "Middels" | "Høy";
};

export default function FormulaCard({ title, formula, explanation, importance }: FormulaCardProps) {
  const [copied, setCopied] = useState(false);

  const copyLatex = async () => {
    await navigator.clipboard.writeText(formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg transition h-full max-w-none">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <button onClick={copyLatex} className="text-zinc-400 hover:text-zinc-100">
          {copied ? "✅" : <ClipboardCopy size={16} />}
        </button>
      </div>

      <p className="text-sm text-zinc-400 mb-3">
        <MathText text={explanation} />
      </p>

      <div className="bg-zinc-950 rounded-md p-3 text-center overflow-x-auto">
        <BlockMath math={formula} />
      </div>

      {importance && (
        <span
          className={`inline-block mt-3 text-xs px-2 py-1 rounded ${
            importance === "Høy"
              ? "bg-emerald-800 text-emerald-200"
              : importance === "Middels"
              ? "bg-amber-800 text-amber-200"
              : "bg-zinc-800 text-zinc-400"
          }`}
        >
          Viktighet: {importance}
        </span>
      )}
    </div>
  );
}
