import React, { useContext, useState } from 'react';
import ApiStore from '../../api/api';

export default function InputField(props) {
	const store = useContext(ApiStore);
	let [initValue, setInitValue] = useState(props.val);
	const [value, setValue] = useState(initValue);
	const changeHandler = (event) => {
		setValue(event.target.value);
	}
	//Submit when field lose focus
	const focusOutHandler = async (event) => {
		const val = event.target.value;
		//Check if value is changed
		if(val !== initValue){
			setInitValue(val);
			
			const response = await store.patchFieldById(props.id, val);
			console.log(response);
		}
	}
	return (
		<>
		<div className="form-control">
			<label htmlFor={props.id}>{props.label}</label>
			<input id={props.id} type="text" name={props.id} value={value} onChange={changeHandler} onBlur={focusOutHandler}/>
		</div>
		</>
	)
}