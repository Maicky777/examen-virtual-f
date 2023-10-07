import { useReducer, createContext } from "react";
import { examenReducer } from "../reducers/examenreducer";
import { useEffect } from "react";

export const ExamenContext = createContext();

const init = () => JSON.parse(localStorage.getItem("datosExamen")) || [];

// eslint-disable-next-line react/prop-types
export const ExamenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(examenReducer, {}, init);

  // Funcion para actyalizar nuestros valores
  const actualizaValores = (newValores) => {
    dispatch({
      type: "LLENA_VALORES",
      payload: newValores,
    });
  };

  // Iniciamos examen
  const initExamen = () => {
    dispatch({
      type: "INIT_EXAMEN",
      payload: true,
    });
  };

  // Iniciamos examen
  const closeExamen = () => {
    dispatch({
      type: "CLOSE_EXAMEN",
      payload: false,
    });
  };

  // Bloqueo de Respuestas
  const bloqueoRes = () => {
    dispatch({
      type: "BLOQUEO_RESP",
      payload: true,
    });
  };

  // Bloqueo de Respuestas
  const habilitarRes = () => {
    dispatch({
      type: "HABILITACION_RESP",
      payload: false,
    });
  };

  // Puntuacion
  const userPuntuacion = (resultado) => {
    dispatch({
      type: "INCREMENT_PUNTUACION",
      payload: resultado,
    });
  };

  // incrementa pregunta
  const siguientePregunta = () => {
    dispatch({
      type: "SIGUIENTE_PREGUNTA",
      payload: 1,
    });
  };

  // funcion para finalizar el examen
  const finalizarExamen = () => {
    dispatch({
      type: "FINALIZAR_EXAMEN",
      payload: true,
    });
  };

  useEffect(() => {
    localStorage.setItem("datosExamen", JSON.stringify(state));
  }, [state]);

  return (
    <ExamenContext.Provider
      value={{
        cantPreguntas: state.cantPreguntas,
        especialidad: state.especialidad,
        inicioExa: state.inicioExa,
        indiceActual: state.indiceActual,
        puntuacion: state.puntuacion,
        isFinish: state.isFinish,
        isBlock: state.isBlock,

        actualizaValores,
        initExamen,
        closeExamen,
        bloqueoRes,
        habilitarRes,
        userPuntuacion,
        siguientePregunta,
        finalizarExamen,
      }}
    >
      {children}
    </ExamenContext.Provider>
  );
};
