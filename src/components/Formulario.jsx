import { useState } from "react";
import { useForm } from "../hook/useForm";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Formulario = () => {

    const { form, changed } = useForm({});
    const [error, setError] = useState(false);

    const guardarPaciente = (e) => {

        e.preventDefault();
        
        if(!form.mascota || !form.propietario || !form.email || !form.alta || !form.sintomas){

            setError(true);

        }else{

            form.id = Date.now();

            GuardarEnStorage("pacientes", form);

            location.reload();

        }
        
    }

    return (

        <div className="md:w-1/2 lg:w-2/5">

            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={guardarPaciente}>

                {error && 
                
                    
                    <p className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">Todos los campos son obligatorios</p>
                    

                }

                <div className="mb-5">

                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Ingrese nombre de la mascota</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" id="mascota" name="mascota" onChange={changed} />

                </div>

                <div className="mb-5">

                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Ingrese nombre del propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" id="propietario" name="propietario" onChange={changed} />

                </div>

                <div className="mb-5">

                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Ingrese email del propietario</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email del propietario" id="email" name="email" onChange={changed} />

                </div>

                <div className="mb-5">

                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Ingrese fecha de alta</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" id="alta" name="alta" onChange={changed} />

                </div>

                <div className="mb-5">

                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Ingrese síntomas de la mascota</label>
                    <textarea  id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los síntomas" name="sintomas" onChange={changed} />

                </div>

                <input type="submit" value="Registrar" className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-all" />

            </form>

        </div>

    )

}
