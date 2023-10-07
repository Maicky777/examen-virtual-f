/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (especialidad, cantPreguntas = 20) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApi = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch(`/json/${especialidad}`);
    const { examenfum } = await res.json();
    setData(examenfum.slice(0, cantPreguntas));
    setIsLoading(false);
  }, [especialidad, cantPreguntas]);

  useEffect(() => {
    getApi();
  }, []);

  return [data, isLoading];
};
