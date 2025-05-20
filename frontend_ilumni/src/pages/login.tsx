import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center bg-white justify-center p-6 min-h-screen">
      {/* Logo Header */}
      <div className="mb-8 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-6xl font-extrabold text-[#49a9f8] font-[Pacifico]">
            Ilumni
          </h1>
        </div>
        <p className="text-[#49a9f8] text-s font-medium">
          Educação que transforma!
        </p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-2xl bg-[#49a9f8]/25 rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-2 bg-[#49a9f8]"></div>

        <div className="p-10">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#49a9f8]">
            Acesse sua conta
          </h2>

          <form className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-[#49a9f8] font-medium mb-1">
                Usuário
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                  placeholder="Digite seu nome de usuário"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[#49a9f8] font-medium mb-1">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 bg-white border border-[#49a9f8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#49a9f8] text-[#0c2c4c] placeholder-[#7baed9]"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#7baed9] hover:text-[#0c2c4c]"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            {/* Login Options Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-[#49a9f8] border-gray-500 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-[#49a9f8]"
                >
                  Lembrar-me
                </label>
              </div>
              <div>
                <NavLink
                  to="/ForgotPassword"
                  className="text-sm text-[#49a9f8] hover:underline"
                >
                  Esqueci a senha
                </NavLink>
              </div>
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <NavLink to="/Pratique" className="block w-full">
                <button
                  type="submit"
                  className="w-full bg-[#49a9f8] hover:bg-[#3b93dd] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Entrar
                </button>
              </NavLink>
            </div>

            {/* Signup Link */}
            <div className="mt-6 text-center border border-[#49a9f8] rounded-lg bg-white py-4">
              <p className="text-[#49a9f8] mb-1">Novo por aqui?</p>
              <NavLink
                to="/Cadastro"
                className="inline-block bg-[#49a9f8] hover:bg-[#3b93dd] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Criar conta
              </NavLink>
            </div>
          </form>

          {/* Motivational Banner */}
          <div className="mt-8 bg-white border border-[#49a9f8] rounded-lg p-4 text-center">
            <p className="text-[#49a9f8] italic">
              "A educação é a arma mais poderosa que você pode usar para mudar o mundo."
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-[#49a9f8] text-sm">
          © 2025 Ilumni - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}