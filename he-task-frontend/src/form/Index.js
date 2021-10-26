import React, { useContext, useEffect, useState } from 'react';
import ApiStore, { api } from '../api/api';
import Card from '../components/UIElements/Card';
import CardBody from '../components/UIElements/CardBody';
import CardHeader from '../components/UIElements/CardHeader';
import Container from '../components/UIElements/Container';
import Text from '../components/UIElements/Text';

const BASE_URL = "http://localhost:5000";

export const FormPage = () => {
	const store = useContext(ApiStore);
	const [error, setError] = useState('');
	const [fields, setFields] = useState([]);
	useEffect ( () => {
		store.getAllFields(setFields);
		console.log(fields);
	}, []);
	
	return (
		<Container>
			<div>
				<Card>
					<CardHeader title="Rendered Fields"/>
					<CardBody>
						{fields.map( f => {
							return (
								<p>{f.label}</p>
							)
						})}
					</CardBody>
				</Card>
			</div>
		</Container>
	)
}