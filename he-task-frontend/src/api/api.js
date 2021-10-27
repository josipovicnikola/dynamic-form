import { createContext } from 'react';

const BASE_URL = "http://localhost:5000";

class Api {
	getAllFields = async (setFields) => {
		const route = "/api/fields";
		let response,
				responseData;
		try {
			response = await fetch(BASE_URL + route);
			responseData = await response.json();
			setFields(responseData);
		} catch(err){
			console.log(err.message);
		}
	}
	patchFieldById = async (id, value) => {
		const route = "/api/fields/"+id;
		let response,
				responseData;
		try {
			response = await fetch(BASE_URL + route, {
				method: 'PATCH',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({'value':value})
			});
			responseData = await response.json();
			return responseData;
		} catch(err){
			console.log(err.message);
		}
	}
	createFieldsData = async (value) => {
		const route = "/api/fields/data"
		let response,
				responseData;
		try {
			response = await fetch(BASE_URL + route, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({'data':value})
			});
			responseData = await response.json();
			return responseData;
		} catch(err){
			console.log(err.message);
		}
	}
}

const ApiStore = createContext(new Api());
export default ApiStore;