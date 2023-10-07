export const examenReducer = (state = {}, action) => {
  switch (action.type) {
    case "LLENA_VALORES":
      return {
        ...state,
        especialidad: action.payload.materia,
        cantPreguntas: action.payload.cantidad,
        inicioExa: false,
        indiceActual: 0,
        puntuacion: 0,
        isFinish: false,
        isBlock: false,
      };

    case "INIT_EXAMEN":
      return {
        ...state,
        inicioExa: action.payload,
      };

    case "CLOSE_EXAMEN":
      return {
        ...state,
        inicioExa: action.payload,
      };

    case "BLOQUEO_RESP":
      return {
        ...state,
        isBlock: action.payload,
      };

    case "HABILITACION_RESP":
      return {
        ...state,
        isBlock: action.payload,
      };

    case "INCREMENT_PUNTUACION":
      return {
        ...state,
        puntuacion: state.puntuacion + action.payload,
      };

    case "SIGUIENTE_PREGUNTA":
      return {
        ...state,
        indiceActual: state.indiceActual + action.payload,
      };

    case "FINALIZAR_EXAMEN":
      return {
        ...state,
        isFinish: action.payload,
      };
    default:
      return state;
  }
};
