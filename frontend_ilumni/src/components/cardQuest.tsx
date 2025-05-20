interface QuestaoProps {
  titulo: string;
  assunto: string;
  nivel: string;
  materia: string;
  onClick: () => void;
}

export default function CardQuest({ titulo, assunto, nivel, materia, onClick }: QuestaoProps) {
  const materiaColor = {
    Física: "bg-orange-700",
    Química: "bg-purple-800",
    Matemática: "bg-red-700",
  }[materia] || "bg-gray-300";

  const nivelColor = {
    "1": "text-green-600",
    "2": "text-lime-600",
    "3": "text-yellow-500",
    "4": "text-orange-500",
    "5": "text-red-600",
  }[nivel] || "text-gray-600";

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-xl w-full max-w-sm border border-gray-200 overflow-hidden transition hover:shadow-lg"
    >
      <div className={materiaColor + " h-2"} />
      <div className="p-5">
        <h2 className="text-xl font-bold text-[#49a9f8] mb-2">{titulo}</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Assunto:</span> {assunto}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Nível:</span>{" "}
          <span className={nivelColor + " font-bold transition-colors duration-300"}>
            {nivel}
          </span>
        </p>
      </div>
    </div>
  );
}

