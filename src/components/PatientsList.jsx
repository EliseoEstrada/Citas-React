import Patient from './Patient';

function PatientsList({ patients, setPatient, deletePatient }) {
	return (
		<div className=" md:w-1/2 lg:w-3/5">
			{patients && patients.length ? (
				<>
					<h2 className="font-black text-3xl text-center">
						Lista de pacientes
					</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Administra tus {''}
						<span className="text-indigo-600 font-bold">
							Pacientes y Citas
						</span>
					</p>

					<div className="md:h-screen overflow-y-scroll">
						{patients.map((patient) => (
							<Patient
								key={patient.id}
								patient={patient}
								setPatient={setPatient}
								deletePatient={deletePatient}
							/>
						))}
					</div>
				</>
			) : (
				<>
					<h2 className="font-black text-3xl text-center">
						No hay ningun paciente
					</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Los pacientes que agregues {''}
						<span className="text-indigo-600 font-bold">
							apareceran aqui
						</span>
					</p>
				</>
			)}
		</div>
	);
}

export default PatientsList;
