import { useContext } from "react";
import { ExamenContext } from "../context/ExamenContext";
import imagen from "../assets/svg/notas.svg";
import { useNavigate } from "react-router-dom";

export const Calificacion = () => {
  const { cantPreguntas, puntuacion, actualizaValores } = useContext(
    ExamenContext
  );
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <div className="max-w-lg p-5 rounded-md shadow-md bg-zinc-100 w-fit shadow-red-500">
        <article>
          <header>
            <h2 className="my-3 font-bold text-center uppercase">
              Resultado Final{" "}
            </h2>
          </header>

          <main>
            <img src={imagen} alt="notas" width={"200px"} className="my-5" />

            <div className="flex">
              <h4 className="flex-1 font-bold">Total de Preguntas:</h4>
              <span className="font-semibold">{cantPreguntas}</span>
            </div>
            <div className="flex">
              <h4 className="flex-1 font-bold">Respuestas Correctas: </h4>
              <span className="font-semibold">{puntuacion}</span>
            </div>

            <button
              onClick={() => {
                actualizaValores({
                  especialidad: null,
                  cantPreguntas: null,
                  inicioExa: false,
                  indiceActual: 0,
                  puntuacion: 0,
                  isFinish: false,
                  isBlock: false,
                }),
                  navigate("/", { replace: true });
              }}
              className="w-full my-3 border-2 rounded-md border-gray-950"
            >
              Salir
            </button>
          </main>

          <footer className="mt-2">
            <p className="text-sm italic font-semibold text-red-500">
              Frente de Unidad del Magisterio
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};
