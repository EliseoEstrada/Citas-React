import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {
  const innit = JSON.parse(localStorage.getItem("patients")) ?? []; //Si no hay nada, agregar un arreglo vacio

  //lista de pacientes
  const [patients, setPatients] = useState(innit);

  //Paciente individual
  const [patient, setPatient] = useState({});

  // Actualizar localstorage
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatePatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatePatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patients={patients} // pasar lista de pacientes
          setPatients={setPatients}
          patient={patient} //editar paciente
          setPatient={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
