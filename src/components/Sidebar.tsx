import { Link, useLocation } from "react-router-dom";

export const chapters = [
  { id: 1, title: "Deskriptiv statistikk", emoji: "📊" },
  { id: 2, title: "Hendelser og sannsynlighet", emoji: "🎲" },
  { id: 3, title: "Stokastiske variabler og fordelinger", emoji: "📈" },
  { id: 4, title: "Forventningsverdi og varians", emoji: "📐" },
  { id: 5, title: "Viktige diskrete fordelinger", emoji: "🎯" },
  { id: 6, title: "Viktige kontinuerlige fordelinger", emoji: "📉" },
  { id: 7, title: "Funksjoner av stokastiske variabler", emoji: "🔀" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-90 h-auto bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col pl-10">
      <h1 className="text-xl font-bold mb-6 text-zinc-100">
        TMA4245 📘
      </h1>

      <nav className="space-y-2">
        {chapters.map((ch) => {
          const active = location.pathname.includes(ch.id.toString());
          return (
            <Link
              key={ch.id}
              to={`/chapter/${ch.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition 
                ${active ? "bg-zinc-800 text-white shadow-md mb-2 shadow-blue-900" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"}
              `}
            >
              <span>{ch.emoji}</span>
              <span>{ch.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
