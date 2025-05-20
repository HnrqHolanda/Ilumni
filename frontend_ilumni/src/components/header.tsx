import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa"; // <-- ícone de livro aberto

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[10vh] bg-white text-[#49a9f8] shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between h-full">

        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide font-[Pacifico] pl-4 flex items-center gap-2">
          <FaBookOpen size={28} color="#49a9f8" className="mr-5"/>
          <Link to="/">Ilumni</Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-2xl font-semibold">
          <Link to="/pratique" className="hover:text-[#007acc] transition-colors duration-200">
            Pratique
          </Link>
          <Link to="/forum" className="hover:text-[#007acc] transition-colors duration-200">
            Fórum
          </Link>
          <Link
            to="/login"
            className="bg-[#49a9f8] text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-[#318fd8] transition-colors duration-200"
          >
            Entrar
          </Link>

        </nav>

      </div>
    </header>
  );
}
