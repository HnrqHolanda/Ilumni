import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    curso: "",
    faculdade: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center bg-white justify-center p-6 min-h-screen">
      {/* Logo Header */}
      <div className="mb-8 flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-[#49a9f8] font-[Pacifico]">Ilumni</h1>
        <p className="text-[#49a9f8] text-s font-medium">Educação que transforma!</p>
      </div>

      {/* Cadastro Card */}
      <div className="w-full max-w-5xl bg-[#49a9f8]/25 rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-2 bg-[#49a9f8]"></div>

        <div className="p-10  max-h-[90vh]">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#49a9f8]">
            Crie sua conta
          </h2>

          <form className="space-y-4">
            {/* Nome e Sobrenome */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-[#49a9f8] font-medium mb-2">Nome</label>
                <input
                  name="nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-[#49a9f8] font-medium mb-2">Sobrenome</label>
                <input
                  name="sobrenome"
                  type="text"
                  value={form.sobrenome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                  placeholder="Digite seu sobrenome"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#49a9f8] font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                placeholder="Digite seu email"
              />
            </div>

            {/* Senha e Confirmar Senha */}
            <div className="flex gap-4">
              <div className="w-1/2 relative">
                <label className="block text-[#49a9f8] font-medium mb-2">Senha</label>
                <input
                  name="senha"
                  type={showPassword ? "text" : "password"}
                  value={form.senha}
                  onChange={handleChange}
                  className="w-full pr-12 pl-4 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                  placeholder="Crie uma senha"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 top-[30px] flex items-center pr-3 text-[#7baed9] hover:text-[#0c2c4c]"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              <div className="w-1/2">
                <label className="block text-[#49a9f8] font-medium mb-2">Confirmar senha</label>
                <input
                  name="confirmarSenha"
                  type={showPassword ? "text" : "password"}
                  value={form.confirmarSenha}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            {/* Curso de interesse */}
            <div>
              <label className="block text-[#49a9f8] font-medium mb-2">Curso de interesse</label>
              <select
                name="curso"
                value={form.curso}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#49a9f8] rounded-lg text-[#0c2c4c]"
              >
                <option value="">Selecione</option>
                <option value="Engenharia">Engenharia</option>
                <option value="Direito">Direito</option>
                <option value="Medicina">Medicina</option>
                <option value="Administração">Administração</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            {/* Botão de Cadastro */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#49a9f8] hover:bg-[#3b93dd] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Criar conta
              </button>
            </div>

            {/* Link para login */}
            <div className="mt-4 text-center border border-[#49a9f8] rounded-lg bg-white py-4">
              <p className="text-[#49a9f8] mb-2">Já tem uma conta?</p>
              <NavLink
                to="/Login"
                className="inline-block bg-[#49a9f8] hover:bg-[#3b93dd] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Fazer login
              </NavLink>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <p className="text-[#49a9f8] text-sm">
          © 2025 Ilumni - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}

