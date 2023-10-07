import { useContext } from "react";
import { materias } from "../assets/ListadoExmane";
import { GiOpenBook } from "react-icons/gi";
import { ExamenContext } from "../context/ExamenContext";
import { useForm } from "../hooks/useForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialState = {
  materia: "",
  cantidad: 20,
  modelo: "",
};

export const Examen = () => {
  const [formValues, handleInput, reset] = useForm(initialState);
  const { actualizaValores } = useContext(ExamenContext);
  const navigate = useNavigate();

  const { materia, cantidad, modelo } = formValues;

  // Envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!materia || !cantidad || !modelo || cantidad > 100 || cantidad < 5)
      return toast.warning("Revise lo Campos");

    // Envio de Formulario
    actualizaValores(formValues);

    // reseteamos Formulario
    reset();

    // envio al modelo respectivo
    navigate(`/${modelo}`);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen p-5 text-gray-950">
        <main className="container grid w-full gap-5 mx-auto place-content-center">
          <div className="w-full md:w-[400px] shadow-md shadow-gray-500 p-3 bg-slate-50 rounded-md ">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-semibold text-red-500">
                Frente F.U.M
              </h4>
              <GiOpenBook />
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col my-3">
                <label htmlFor="materia" className="mb-2 font-semibold">
                  Seleccione su Especialidad:
                </label>
                <select
                  name="materia"
                  id="materia"
                  className="bg-slate-100 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                  value={materia}
                  onChange={handleInput}
                >
                  <option value="">Seleccione...</option>
                  {materias.map((especialidad) => (
                    <option key={especialidad.id} value={especialidad.materia}>
                      {especialidad.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between w-full py-3">
                <label
                  className="mb-2 w-[80%] font-semibold"
                  htmlFor="cantidad"
                >
                  Ingrese la cantidad de Preguntas
                </label>
                <input
                  className="w-[20%] bg-transparent border-b-2 border-red-500"
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  placeholder="Ej. 15"
                  value={cantidad}
                  onChange={handleInput}
                />
              </div>

              <div className="text-right">
                <small className="text-[11px] italic">
                  Por Defecto viene 20 preguntas - Seleccione Entre [5-100]
                </small>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="modelo"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  className="bg-slate-100 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                  name="modelo"
                  id="modelo"
                  value={modelo}
                  onChange={handleInput}
                >
                  <option value="">Seleccione un modelo</option>
                  <option value="modalidad_1">Examen Modelo 1</option>
                  <option value="modalidad_2">Examen Modelo 2</option>
                  <option value="modalidad_3">Examen Modelo 3</option>
                  <option value="modalidad_4">Examen Modelo 4</option>
                </select>
              </div>
              <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="mt-7">
                <button className="flex items-center justify-center w-full px-4 py-2 text-white rounded-md cursor-pointer bg-gray-950 hover:bg-gray-800 hover:text-white">
                  Accede a tu examen
                  <GiOpenBook className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
