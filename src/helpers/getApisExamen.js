export const getApiPregunta = (data, indice) => {
  const resultado = data.find((res) => Number(res.id) === indice + 1);
  return resultado;
};
