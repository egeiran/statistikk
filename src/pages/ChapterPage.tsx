import { useParams } from "react-router-dom";
import ChapterContent from "../components/ChapterContent";

export default function ChapterPage() {
  const { id } = useParams();
  const chapterId = Number(id);

  return (
    <main className="flex">
      <section className="flex-1">
        <ChapterContent chapterId={chapterId} />
      </section>
    </main>
  );
}
