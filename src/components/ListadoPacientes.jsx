import { useState, useEffect } from "react"

export const ListadoPacientes = () => {

    useEffect(() => {

        conseguirPacientes();

    }, []);

    const [pacientes, setPacientes] = useState([]);
    const [loading, setLoading] = useState(true);

    const conseguirPacientes = () => {

        let pacientes = JSON.parse(localStorage.getItem('pacientes'));

        if (pacientes) {

            setPacientes(pacientes);
            setLoading(false);

        }

    }

    const eliminarPaciente = (id) => {

        let pacientes = JSON.parse(localStorage.getItem('pacientes'));
        let pacientesFiltrados = pacientes.filter(paciente => paciente.id !== id);

        localStorage.setItem('pacientes', JSON.stringify(pacientesFiltrados));

        setPacientes(pacientesFiltrados);

    }

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">pacientes y citas</span>
            </p>

            {loading ? <p className="text-center font-bold mb-3 text-gray-700 uppercase">Cargando...</p> :

                pacientes.length === 0 ? <p className="text-center font-bold mb-3 text-gray-700 uppercase">No hay pacientes registrados</p> :

                    pacientes.map((paciente, index) => (

                        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl" key={index}>

                            <p className="font-bold mb-3 text-gray-700 uppercase">
                                Nombre: {""}
                                <span className="font-normal normal-case">{paciente.mascota}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">
                                Propietario: {""}
                                <span className="font-normal normal-case">{paciente.propietario}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">
                                Email: {""}
                                <span className="font-normal normal-case">{paciente.email}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">
                                Fecha de alta: {""}
                                <span className="font-normal normal-case">{paciente.alta}</span>
                            </p>

                            <p className="font-bold mb-3 text-gray-700 uppercase">
                                Síntomas: {""}
                                <span className="font-normal normal-case">{paciente.sintomas}</span>
                            </p>

                            <div className="flex justify-center">

                                <button onClick={() => eliminarPaciente(paciente.id)} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
                                    Eliminar
                                </button>

                            </div>

                        </div>

                    ))}

        </div>

    )

}
