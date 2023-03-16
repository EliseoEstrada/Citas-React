import { useState, useEffect } from 'react';
import Error from './Error';

function Form({ patients, setPatients, patient, setPatient }) {
	// userStates del formulario
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [symptoms, setSymptoms] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		// comprobar si el objeto no esta vacio
		if (Object.keys(patient).length > 0) {
			setName(patient.name);
			setOwner(patient.owner);
			setEmail(patient.email);
			setDate(patient.date);
			setSymptoms(patient.symptoms);
		}
	}, [patient]);

	// Generar id
	const generateId = () => {
		const random = Math.random().toString(36).substring(2);
		const date = Date.now().toString(36);
		return random + date;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validacion del formulario
		if ([name, owner, email, date, symptoms].includes('')) {
			setError(true);
			return;
		}

		setError(false);

		// Crear objeto nuevo
		const patientObj = {
			name,
			owner,
			email,
			date,
			symptoms,
		};

		// Agregar o editar
		if (!patient.id) {
			// Agregando
			// Hacer copia del arreglo patients con el nuevo objeto y pasarla por medio de setPatients
			(patientObj.id = generateId()),
				setPatients([...patients, patientObj]);
		} else {
			// Editando
			patientObj.id = patient.id;

			// Iterar nuevo arreglo con paciente editado
			const updatePatients = patients.map((patientState) => {
				if (patientState.id === patient.id) {
					return patientObj;
				} else {
					return patientState;
				}
			});

			// Actualizar arreglo
			setPatients(updatePatients);
			// Limpiar memoria de edicion
			setPatient({});
		}

		// Reiniciar formulario
		setName('');
		setOwner('');
		setEmail('');
		setDate('');
		setSymptoms('');
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center mb-5">
				Seguimiento Pacientes
			</h2>
			<p className="text-xl mt-5 mb-10 text-center">
				Añadir pacientes y {''}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>
			<form
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
				onSubmit={handleSubmit}
			>
				{error && <Error message="Todos los campos son obligatorios" />}

				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="petName"
					>
						Nombre mascota
					</label>
					<input
						id="petName"
						type="text"
						placeholder="Nombre de la mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600 focus:outline-none"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="petOwner"
					>
						Nombre propietario
					</label>
					<input
						id="petOwner"
						type="text"
						placeholder="Nombre del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600 focus:outline-none"
						value={owner}
						onChange={(e) => setOwner(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="email"
					>
						Correo
					</label>
					<input
						id="email"
						type="email"
						placeholder="Correo del propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600 focus:outline-none"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="date"
					>
						Fecha de Alta
					</label>
					<input
						id="date"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600 focus:outline-none"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						className="block text-gray-700 uppercase font-bold"
						htmlFor="symptoms"
					>
						Sintomas
					</label>
					<textarea
						id="symptoms"
						type="date"
						placeholder="Describe los sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:border-indigo-600 focus:outline-none"
						value={symptoms}
						onChange={(e) => setSymptoms(e.target.value)}
					/>
				</div>

				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-color hover:cursor-pointer"
					value={patient.id ? 'Editar paciente' : 'Agregar paciente'}
				/>
			</form>
		</div>
	);
}

export default Form;
