import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="p-5 text-center shadow-lg">
        <h2 className="mb-3 text-5xl font-semibold">Error 404</h2>
        <p className="my-3">
          Pagina No Encontrada, valide su url o regrese a la pagina anterior
        </p>

        <button
          className="px-3 py-1 text-white rounded-md bg-gray-950 hover:bg-gray-800"
          onClick={() => navigate("/")}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
