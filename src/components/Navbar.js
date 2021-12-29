import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-blue">
			    <div className="container">
			        <a className="navbar-brand" href="#">Meidy CODE</a>
			        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="navbar-toggler-icon white" ></span>
			        </button>
			        <div className="collapse navbar-collapse" id="navbarSupportedContent">
			        	<ul className="navbar-nav">
			           		<li className="nav-item">
			          			<a className="nav-link" aria-current="page" href="#">Home</a>
			         		</li>
			          		<li className="nav-item">
			            		<a className="nav-link" href="#">Sobre mim</a>
			          		</li>

			          		<li className="nav-item">
			            		<a className="nav-link" href="#">Serviços</a>
			          		</li>

			          		<li className="nav-item">
			            		<a className="nav-link" href="#">Stacks</a>
			          		</li>

			          		<li className="nav-item">
			            		<a className="nav-link" href="#">Portifólio</a>
			          		</li>

			          		<li className="nav-item">
			            		<a className="nav-link" href="#">Contactos</a>
			          		</li>
			        	</ul>
			        </div>
			    </div>
			</nav>
		</>
	);
};

export default Navbar