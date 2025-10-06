import { InlineMath } from "react-katex";

export default function MathText({ text }: { text: string }) {
  if (!text) return null;
  const parts = text.split(/(\$[^$]+\$)/g); // fanger alt mellom $...$
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("$") && part.endsWith("$")) {
          const latex = part.slice(1, -1); // fjern dollartegn
          return <InlineMath key={i} math={latex} />;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
