import React, { useState } from 'react';


const Main = () => {
	const [count, setCount] = useState(0);

	const moreCount = () => {
		setCount((c) => c + 1);
	}

	return(
		<div className="container mt-5">
			<h1 className="mr-auto">Testando o main-conponent</h1>
			<div>{count}</div>
			<button className="btn btn-outline-primary" onClick={moreCount}>Click em mim para alterar o estado</button>
		</div>
	);
}



export default Main;