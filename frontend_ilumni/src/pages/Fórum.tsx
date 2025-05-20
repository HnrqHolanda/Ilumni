import Header from "../components/header";

export default function Fórum() {
    return (
        <div className="w-full min-h-screen">
          <Header />
    
          {/* Home Content Container */}
          <div className="home-content mt-[10vh]">
    
            {/* Content 2 */}
            <section className="w-full bg-white text-blue-600 py-20 flex items-center justify-center">
              <h2 className="text-3xl font-semibold">Fórum</h2>
            </section>
          </div>
        </div>
    );
}