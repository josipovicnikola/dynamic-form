import React, { useContext, useEffect, useState } from 'react';
import ApiStore from '../api/api';
import Card from '../components/UIElements/Card';
import CardBody from '../components/UIElements/CardBody';
import CardHeader from '../components/UIElements/CardHeader';
import Container from '../components/UIElements/Container';
import DynamicField from '../components/FormElements/DynamicField';

export const FormPage = () => {
	const store = useContext(ApiStore);
	const [error, setError] = useState('');
	const [fields, setFields] = useState([]);
	const [fieldValues, setFieldValues] = useState([]);
	let fs = [];
	useEffect ( () => {
		store.getAllFields(setFields);
	}, []);
	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log(...fields);
	}
	const renderForm = () => {
		return (
			<form className="form" onSubmit={formSubmitHandler}>
					{fields.map( f => {
							return (
								<DynamicField key={f._id} field={f}/>
							)
						})}
						<div className="btn-container">
						<button className="btn">Save Changes</button>
						</div>
			</form>
		);
	}
	return (
		<Container>
			<div>
				<Card>
					<CardHeader title="Rendered Fields"/>
					<CardBody>
						{renderForm()}
					</CardBody>
				</Card>
			</div>
		</Container>
	)
}