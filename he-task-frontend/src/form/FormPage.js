import React, { useContext, useEffect, useState } from 'react';
import ApiStore from '../api/api';
import Text from '../components/UIElements/Text';
import Card from '../components/UIElements/Card';
import CardBody from '../components/UIElements/CardBody';
import CardHeader from '../components/UIElements/CardHeader';
import Container from '../components/UIElements/Container';
import DynamicField from '../components/FormElements/DynamicField';

export const FormPage = () => {
	const store = useContext(ApiStore);
	const [fields, setFields] = useState([]);
	const [error, setError] = useState('');
	useEffect ( () => {
		store.getAllFields(setFields);
	}, []);
	const changeFieldValue = (id,value,required) => {
		let tempFields = [...fields];
		tempFields.map(f => {
			if(f._id === id)
				f.value = value;
		})
		setFields([...tempFields]);
		isFormValid();
		console.log(tempFields);
	}
	//Form sumbit
	const onSubmitHandler = async (event) => {
		event.preventDefault();
		let tempFields = [];
		
		if(isFormValid()){
			//Formating array for posting into DB
			fields.map(f => {
				let filteredVal = f.value;
				if(f.type ==='boolean'){
					filteredVal = f.value === '1'?'Yes':'No';
				}
				return tempFields.push({label:f.label, value:filteredVal});
			})
			
			const response = await store.createFieldsData(JSON.stringify(tempFields));
			console.log(response);
		}
	}
	//Validate form
	const isFormValid = () => {
		let formValid = true;
		setError('');
		fields.map(f =>{
			if(f.required){
				if(!f.value || f.value === 'undefined'){
					formValid = false;
				}
			}
		})
		!formValid && setError('Please fill up all required fields.');
		console.log(error);
		return formValid;
	}
	const renderForm = () => {
		return (
			<form id="dynamic-form" className="form" onSubmit={onSubmitHandler}>
					{fields.map( f => {
							return (
								<DynamicField key={f._id} field={f} changeFieldValue={changeFieldValue}/>
							)
						})}
						<div className="btn-container">
						<Text className="text-right text-error my-1">{error}</Text>
							<button className="btn" disabled={error !== ''}>Submit</button>
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