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
	const changeFieldValue = (id,value) => {
		let tempFields = [...fields];
		tempFields.map(f => {
			if(f._id === id)
				f.value = value;
		})
		setFields([...tempFields]);
	}
	const onSubmitHandler = async (event) => {
		event.preventDefault();
		let tempFields = [];
		fields.map(f => {
			let filteredVal = f.value;
			if(f.type=='boolean'){
				filteredVal = f.value=='1'?'Yes':'No';
			}
			tempFields.push({label:f.label, value:filteredVal});
		})
		console.log(JSON.stringify(tempFields));
		const response = await store.createFieldsData(JSON.stringify(tempFields));
		console.log(response);
	}
	const renderForm = () => {
		return (
			<form className="form" onSubmit={onSubmitHandler}>
					{fields.map( f => {
							return (
								<DynamicField key={f._id} field={f} changeFieldValue={changeFieldValue}/>
							)
						})}
						<div className="btn-container">
							<button className="btn">Submit</button>
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