import React, { createContext } from 'react';

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
}

const ApiStore = createContext(new Api());
export default ApiStore;