interface BoxQuestaoProps {
  enunciado: string;
  imagemUrl?: string;
  onClose: () => void;
  placeholder: string;
}

export default function BoxQuest({ enunciado, imagemUrl, onClose, placeholder }: BoxQuestaoProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
      >
        ×
      </button>

      <div className="flex gap-6">
        {imagemUrl && (
          <div className="w-1/3">
            <img src={imagemUrl} alt="Questão" className="rounded-lg w-full h-auto object-cover" />
          </div>
        )}

        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#49a9f8] mb-4">{enunciado}</h2>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#49a9f8]"
          />
          <button className="mt-4 bg-[#49a9f8] text-white px-4 py-2 rounded-lg hover:bg-[#1e88e5] transition">
            Responder
          </button>
        </div>
      </div>
    </div>
  );
}