import { useContext } from "react";
import { ExamenContext } from "../context/ExamenContext";
import { useNavigate } from "react-router-dom";

export const BienvenidaPage = () => {
  const { cantPreguntas, especialidad, initExamen, closeExamen } = useContext(
    ExamenContext
  );
  const navigate = useNavigate();
  const materia = especialidad.split(".")[0].replace("_", " ");

  const empezarExa = () => {
    initExamen();
  };

  const corregirExa = () => {
    closeExamen();
    navigate("/", { replace: true });
  };

  return (
    <div className="grid w-full h-screen place-content-center">
      <section className="p-5 rounded-md shadow-md bg-slate-100 w-[400px]">
        <h2 className="text-xl font-bold text-red-700">
          Tu datos seleccionados
        </h2>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <h4 className="font-bold">
          Cantidad de Preguntas:{" "}
          <span className="text-red-500">{cantPreguntas}</span>
        </h4>
        <h4 className="mt-3 font-bold">
          Especialidad: <span className="text-red-500">{materia}</span>
        </h4>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex gap-2">
          <button
            onClick={empezarExa}
            className="flex items-center justify-center w-full px-4 py-2 text-white rounded-md cursor-pointer bg-gray-950 hover:bg-gray-800 hover:text-white"
          >
            Empezar
          </button>
          <button
            onClick={corregirExa}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-900 rounded-md cursor-pointer hover:bg-red-700 hover:text-white"
          >
            Corregir
          </button>
        </div>
      </section>
    </div>
  );
};
