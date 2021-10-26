import React, { useContext, useEffect, useState } from 'react';
import ApiStore from '../api/api';
import Card from '../components/UIElements/Card';
import CardBody from '../components/UIElements/CardBody';
import CardHeader from '../components/UIElements/CardHeader';
import Container from '../components/UIElements/Container';
import DynamicField from '../components/FormElements/DynamicField';

export const FormPage = () => {
	const store = useContext(ApiStore);
	const [fields, setFields] = useState([]);
	useEffect ( () => {
		store.getAllFields(setFields);
	}, []);
	const renderForm = () => {
		return (
			<form className="form">
					{fields.map( f => {
							return (
								<DynamicField key={f._id} field={f}/>
							)
						})}
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