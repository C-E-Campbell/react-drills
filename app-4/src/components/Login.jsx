import React from "react";

const Login = ({
	placeholder1,
	placeholder2,
	onUserChange,
	onPassChange,
	onClick
}) => {
	return (
		<div>
			<input
				placeholder={placeholder1}
				onChange={e => onUserChange(e.target.value)}
			/>
			<input
				placeholder={placeholder2}
				onChange={e => onPassChange(e.target.value)}
			/>
			<button onClick={onClick}>Login</button>
		</div>
	);
};

export default Login;
