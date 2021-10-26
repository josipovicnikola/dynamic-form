import React, { useContext, useState } from 'react';
import ApiStore from '../../api/api';

export default function InputField(props) {
	const store = useContext(ApiStore);
	let initValue = props.val;
	const [value, setValue] = useState(initValue);
	const changeHandler = (event) => {
		setValue(event.target.value);
	}
	const focusOutHandler = async (event) => {
		const val = event.target.value;
		if(val != initValue){
			console.log(val);
			initValue = val;
			
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