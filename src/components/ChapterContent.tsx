import FormulaCard from "./FormulaCard";
import { chapters } from "../data/chapters";
import Quiz from "./Quiz";
import MathText from "./MathText";

export default function ChapterContent({ chapterId }: { chapterId: number }) {
  const chapter = chapters.find((c) => c.id === chapterId)!;

  return (
    <div className="flex flex-col gap-10 p-10 w-full pr-16">
        <h2 className="text-2xl font-bold flex items-center gap-2">
            {chapter.emoji} {chapter.title}
        </h2>

        <p className="text-zinc-400 leading-relaxed">
            <MathText text={chapter.intro} />
        </p>

        {/* Begreper og formler */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
            {/* Begreper */}
            <div>
                <h3 className="text-xl font-semibold mb-2">Begreper</h3>
                <div className="grid gap-3">
                {chapter.concepts.map((c, i) => (
                    <div key={i} className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl">
                    <strong className="text-white">{c.term}</strong>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                        <MathText text={c.definition} />
                    </p>
                    </div>
                ))}
            </div>
            </div>

            {/* Formler */}
            <div>
                <h3 className="text-xl font-semibold mb-2">Formler</h3>
                <div className="grid gap-4">
                {chapter.formulas.map((f, i) => (
                    <FormulaCard key={i} {...f} />
                ))}
                </div>
            </div>
        </div>

        {/* Quiz */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10 max-w-500px justify-center">
            <div className="flex-1 max-w-xl">
                <Quiz questions={chapter.quiz} />
            </div>
        </div>
    </div>
  );
}
