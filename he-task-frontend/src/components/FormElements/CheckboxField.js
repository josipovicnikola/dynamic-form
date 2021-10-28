import React, { useState } from 'react';

export default function CheckboxField(props) {
	const [checked, setChecked] = useState(false);
	const checkChanged = () => {
		let state = checked?false:true;
		setChecked(state);
		
		props.changeFieldValue(props.id, state?'1':'0');
	}
	const handleOnChange = (event) => {
		checkChanged();
	}
	return (
		<>
		<div className="form-control">
			<label htmlFor={props.id}>{props.label} <span className="color-red">{props.required?"*":""}</span></label>
			<label className="switch">
				<input id={props.id} type="checkbox" checked={checked} onChange={handleOnChange}/>
				<span className="slider round"></span>
		</label>
		</div>
		</>
	)
}