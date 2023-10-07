import { BienvenidaPage } from "../components/BienvenidaPage";
import { useContext } from "react";
import { ExamenContext } from "../context/ExamenContext";
import { PageModel_1 } from "../components/PageModel_1";
import { useFetch } from "../hooks/useFetch";

export const Model_Pagina_1 = () => {
  const { inicioExa, cantPreguntas, especialidad } = useContext(ExamenContext);

  const [data, isLoading] = useFetch(especialidad, cantPreguntas);

  if (isLoading) return <div className="bg-black">Cargando...</div>;

  return (
    <div>
      {inicioExa ? (
        <div>
          <PageModel_1 data={data} />
        </div>
      ) : (
        <div>
          <BienvenidaPage />
        </div>
      )}
    </div>
  );
};
