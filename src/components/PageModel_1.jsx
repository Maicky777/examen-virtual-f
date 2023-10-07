/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GiOpenBook } from "react-icons/gi";
import { ExamenContext } from "../context/ExamenContext";
import { useEffect } from "react";
import { useMemo } from "react";
import { getApiPregunta } from "../helpers/getApisExamen";
import { useState } from "react";
import { toast } from "react-toastify";
import { Calificacion } from "./Calificacion";

export const PageModel_1 = ({ data }) => {
  const [resultado, setResultado] = useState(0);
  const [tiemporestante, setTiemporestante] = useState(10);
  const {
    indiceActual,
    cantPreguntas,
    bloqueoRes,
    isBlock,
    isFinish,
    habilitarRes,
    userPuntuacion,
    siguientePregunta,
    finalizarExamen,
  } = useContext(ExamenContext);

  const preguntaActual = useMemo(() => getApiPregunta(data, indiceActual), [
    indiceActual,
    data,
  ]);

  useEffect(() => {
    habilitarRes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiemporestante > 0) {
        setTiemporestante(tiemporestante - 1);
      } else {
        bloqueoRes();
      }
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiemporestante]);

  const verificaResp = (index) => {
    if (Number(preguntaActual.resCorrecta) === index) {
      // e.target.classList.add("bg-green-700");
      setResultado(1);
      toast.success("Respuesta Correcta...", {
        autoClose: 2000,
        position: "top-center",
      });
    } else {
      // e.target.classList.add("bg-red-700");
      toast.error("Respuesta Incorrecta...", {
        autoClose: 2000,
        position: "top-center",
      });
      setResultado(0);
    }
    bloqueoRes();
  };

  // funcion para pregunta siguiente
  const handleContinuar = () => {
    userPuntuacion(resultado);

    if (indiceActual + 1 === Number(cantPreguntas)) {
      finalizarExamen();
    } else {
      siguientePregunta();
      habilitarRes();
      setTiemporestante(10);
    }
  };

  if (!preguntaActual) return <div>Cargando...</div>;

  return (
    <>
      <div className="grid w-full min-h-screen p-5 place-content-center">
        {!isFinish ? (
          <div className="flex flex-col md:flex-row w-full md:w-[750px]  p-3 rounded-lg shadow-lg bg-slate-200">
            <>
              <section className="flex flex-col justify-between flex-1 p-3 gap-y-5">
                <div>
                  <h3 className="text-xl font-bold">
                    Pregunta <span>{indiceActual + 1}</span> de{" "}
                    <span>{cantPreguntas}</span>
                  </h3>
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
                <div>
                  <h4 className="italic text-justify">
                    <small>¿</small>
                    {preguntaActual.pregunta}
                    <small>?</small>
                  </h4>
                </div>
                <div>
                  {!isBlock ? (
                    <h2 className="font-bold text-center text-md md:text-left">
                      Tiempo Restante:
                      <span className="ml-2 text-xl text-red-500">
                        {tiemporestante}
                      </span>
                      <small className="ml-1 italic font-medium">
                        Segundos
                      </small>
                    </h2>
                  ) : (
                    <div className="grid w-full place-content-center md:place-content-start">
                      <h2 className="px-3 py-1 italic border-b-2 border-red-700 rounded-md w-fit">
                        Pase a la siguiente pregunta
                      </h2>
                    </div>
                  )}
                </div>
              </section>
              <section className="flex flex-col flex-1 p-3 gap-y-5">
                <h5 className="flex items-center justify-end italic font-semibold text-right ">
                  Selecciona tu Respuesta <GiOpenBook className="ml-2" />
                </h5>
                {preguntaActual.respuestas.map((resp, index) => (
                  <button
                    disabled={isBlock}
                    onClick={() => verificaResp(index)}
                    key={resp}
                    className={`w-full px-3 py-2 text-left  rounded-md  ${
                      isBlock
                        ? "bg-slate-400 cursor-not-allowed text-white"
                        : "bg-gray-950 text-white hover:bg-gray-700"
                    }`}
                  >
                    {resp}
                  </button>
                ))}

                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="ml-auto">
                  <button
                    onClick={() => handleContinuar()}
                    className="w-fit bg-cyan-900 text-white hover:bg-cyan-800 font-normal italic py-1 px-2.5 rounded"
                  >
                    Siguiente pregunta
                  </button>
                </div>
              </section>
            </>
          </div>
        ) : (
          <Calificacion />
        )}
      </div>
    </>
  );
};
