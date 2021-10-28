import React, { useState } from 'react';

export default function InputField(props) {
	let [previousValue, setPreviousValue] = useState('');
	const [value, setValue] = useState('');
	const changeHandler = (event) => {
		setValue(event.target.value);
	}
	//Submit when field lose focus
	const focusOutHandler = async (event) => {
		const val = event.target.value;
		//Check if value is changed
		if(val !== previousValue){
			setPreviousValue(val);
			props.changeFieldValue(props.id, val);
		}
	}
	return (
		<>
		<div className="form-control">
			<label htmlFor={props.id}>{props.label} <span className="color-red">{props.required?"*":""}</span></label>
			<input id={props.id} name={props.id} value={value} onChange={changeHandler} onBlur={focusOutHandler}/>
		</div>
		</>
	)
}