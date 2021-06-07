import React from 'react';
import '../../Apps.css';

const Footer = () => {
	return (
		<div className="footercontain">
			<span style={{ color: '#fff', top: '1.5rem', left: '1rem', position: 'relative' }}>
				&copy;{new Date().getFullYear()} All Rights Reserved. <br />
				Project Created by Bhupender Sharma
			</span>
		</div>
	);
};

export default Footer;
