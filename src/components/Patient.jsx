const Patient = ({ patient, setPatient, deletePatient }) => {
	const { name, owner, email, date, symptoms, id } = patient;

	const handleDelete = () => {
		const response = confirm('¿Deseas eliminar el paciente?');
		if (response) {
			deletePatient(id);
		}
	};

	return (
		<div className="mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-7 uppercase">
				Nombre: {''}
				<span className="font-normal normal-case">{name}</span>
			</p>
			<p className="font-bold mb-3 text-gray-7 uppercase">
				Propietario: {''}
				<span className="font-normal normal-case">{owner}</span>
			</p>
			<p className="font-bold mb-3 text-gray-7 uppercase">
				Correo: {''}
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="font-bold mb-3 text-gray-7 uppercase">
				Fecha alta: {''}
				<span className="font-normal normal-case">{date}</span>
			</p>
			<p className="font-bold mb-3 text-gray-7 uppercase">
				Sintomas: {''}
				<span className="font-normal normal-case">{symptoms}</span>
			</p>

			<div className="flex justify-between mt-10">
				<button
					className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
					onClick={() => setPatient(patient)}
				>
					Editar
				</button>
				<button
					className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
					onClick={handleDelete}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};

export default Patient;
