import Header from "../components/header";
import CardQuest from "../components/cardQuest";
import BoxQuest from "../components/boxQuest";
import { useState } from "react";
import questoes from '../../data/teste.json'



export default function Pratique() {
  const [questaoSelecionada, setQuestaoSelecionada] = useState<questao | null>(null);

  interface questao {
  titulo: string;
  enunciado: string;
  resposta_correta: string;
  placeholder: string;
  nivel: string;
  materia: string;
  assunto: string;
  imagemUrl?: string;
  }
  
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />

      <div className="home-content mt-[10vh]">
        {/* Título */}
        <section className="w-full bg-white text-blue-600 py-20 flex items-center justify-center">
          <h2 className="text-3xl font-semibold">Pratique</h2>
        </section>

        {/* Cards de Questões */}
        <section className="flex flex-wrap gap-6 justify-center p-6">
          {questoes.map((questao: questao, index: number) => (
            <CardQuest
              key={index}
              titulo={questao.titulo}
              assunto={questao.assunto}
              nivel={questao.nivel}
              materia={questao.materia}
              onClick={() => setQuestaoSelecionada(questao)}
            />
          ))}
        </section>

        {/* Modal */}
        {questaoSelecionada && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <BoxQuest
              enunciado={questaoSelecionada.enunciado}
              imagemUrl={questaoSelecionada.imagemUrl}
              placeholder={questaoSelecionada.placeholder}
              onClose={() => setQuestaoSelecionada(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
