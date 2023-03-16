const Error = ({ message }) => {
	return (
		<div className="bg-red-700 text-white text-center p-3 font-bold- mb-3 rounded-md">
			<p> {message} </p>
		</div>
	);
};

export default Error;
