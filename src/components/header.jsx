import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="header-form">
				<img className="header-logo" src="./images/logo.png" alt="logo" />
				<button className="header-btn">logout</button>
			</div>
			<h1 className="header-title">Business Card Marker</h1>
		</header>
	);
};

export default Header;
