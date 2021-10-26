import React from 'react';
import Container from '../components/UIElements/Container';
import Text from '../components/UIElements/Text';
import '../assets/css/style.css';

export default function Header() {
	return (
		<>
		<nav>
			<div className="bg-primary">
				<Container className="text-white">
					<div className="header-info">
						<Text className="small text-left">Nikola Josipovic</Text>
						<Text className="small text-right">Email: josipovic.smbb@gmail.com</Text>
					</div>
				</Container>
			</div>
			<div className="bt-shadow">
				<Container>
					<div className="header-nav">
						<Text className="large">Render My Form</Text>
					</div>
				</Container>
			</div>
		</nav>
		</>
	)
}