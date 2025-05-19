import Header from "../components/header";


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />

      {/* Home Content Container */}
      <div className="home-content mt-[10vh]">
        {/* Content 1 */}
       <section className="w-full h-[90vh] bg-[#49a9f8] py-20 flex items-center justify-center relative overflow-hidden">
          {/* Camada da imagem de fórmulas (por cima do azul) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <img
              src="fórmulas.png"
              alt="Fórmulas"
              className="w-[95vw] h-[88vh] object-cover opacity-40"
            />
          </div>

          {/* Conteúdo acima */}
          <div className="w-[90vw] flex items-center justify-between relative z-10">
            {/* Coluna da Imagem */}
            <div className="w-1/2 flex flex-col items-center justify-center animate-fadein font-[Pacifico] text-white text-[12rem] leading-snug text-center">
            <h1
              style={{
                textShadow: '2px 2px 50px rgba(0, 0, 0, 0.8)',
              }}
            >
              Ilumni
            </h1>
            <h1
              style={{
                textShadow: "2px 2px 50px rgba(0, 0, 0, 0.8)",
              }}
            >
              Educação
            </h1>
          </div>

            {/* Coluna do Texto */}
            <div className="w-2/5 max-w-3xl h-[50vh] bg-white p-8 rounded-lg shadow-lg mr-30 animate-fadein">
              <h2
                className="text-6xl font-semibold mb-6 text-center text-[#49a9f8]"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                Conheça a plataforma
              </h2>
              <p
                className="text-3xl leading-relaxed text-[#49a9f8]"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                A Ilumni é uma plataforma feita para impulsionar seus estudos com desafios organizados, fórum colaborativo e estatísticas de desempenho. Aprenda no seu ritmo e evolua continuamente!
              </p>
            </div>

          </div>
        </section>

        {/* Content 2 */}
        <section className="w-full bg-white text-blue-600 py-20 flex items-center justify-center">
          <h2 className="text-3xl font-semibold">Content 2</h2>
        </section>
      </div>
    </div>
  );
}